import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './model/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll() {
    const response = await this.userRepository.find({
      where: { isActive: true },
    });
    return response;
  }

  async findById(id: string) {
    const response = await this.userRepository.findOne({
      where: { id: id, isActive: true },
    });
    return response;
  }
}
