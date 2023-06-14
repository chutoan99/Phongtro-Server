import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user/model/user.entity';
import { Repository } from 'typeorm';
import { InputRegister } from './args/input_register.args';
import { v4 as uuidv4 } from 'uuid';
import { hashSync, compareSync, genSaltSync } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { InputLogin } from './args/input_login.args';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async register(input: InputRegister) {
    const { name, phone, password } = input;
    const hashedPassword = hashSync(password, genSaltSync(12));
    try {
      if (!name || !phone || !password) {
        return {
          token: null,
          err: 1,
          msg: 'Missing input!',
        };
      }

      const existingUser = await this.userRepository.findOne({
        where: { phone: String(phone) },
      });

      if (existingUser) {
        return {
          token: null,
          err: 2,
          msg: 'PHONE NUMBER HAS BEEN ALREADY USED!',
        };
      }

      const response: UserEntity = await this.userRepository.save({
        id: uuidv4(),
        name: name,
        phone: phone,
        avatar: 'https://phongtro123.com/images/default-user.png',
        password: hashedPassword,
      });

      const token = jwt.sign(
        {
          id: response.id,
          phone: response.phone,
        },
        process.env.SECRET_KEY,
        { expiresIn: '2d' },
      );

      return {
        err: 0,
        msg: 'REGISTER IS SUCCESS',
        token,
      };
    } catch (err) {
      throw err;
    }
  }

  async login(input: InputLogin) {
    const { phone, password } = input;
    try {
      if (!phone || !password)
        return {
          err: 1,
          msg: 'Missing input !',
        };
      const response = await this.userRepository.findOne({
        where: { phone: phone },
      });

      const isCorrectPassWord =
        response && compareSync(password, response.password);

      const token =
        isCorrectPassWord &&
        jwt.sign(
          {
            id: response.id,
            phone: response.phone,
          },
          process.env.SECRET_KEY,
          { expiresIn: '2d' },
        );

      return {
        err: token ? 0 : 2,
        msg: token
          ? 'LOGIN IS SUCCESS'
          : response
          ? 'PASSWORD IS WRONG'
          : 'PHONE NUMBER  OR PASSWORD HAS BEEN ALDREADY USED !',
        token: token || null,
        response,
      };
    } catch (err) {
      throw err;
    }
  }
}
