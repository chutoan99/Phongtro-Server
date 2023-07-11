import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './model/user.entity';
import { InputUpdateProfile } from './args/update_profile.args';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAllUser() {
    const response = await this.userRepository.find({
      where: { isActive: true },
    });
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get user.',
      response,
    };
  }

  async getCurrentUser(id: string) {
    const response = await this.userRepository.findOne({
      where: { id: id },
    });
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get userid',
      response,
    };
  }

  async updateUser(id: string, input: InputUpdateProfile) {
    try {
      const response = await this.userRepository.update(id, {
        name: input.name,
        avatar: input.avatar,
        phone: input.phone,
        zalo: input.zalo,
        file: input.file,
      });
      return {
        err: 0,
        msg: 'Profile updated successfully',
        // response: null,
      };
    } catch (error) {
      return {
        err: -1,
        msg: error,
        // response: null,
      };
    }
  }
}
