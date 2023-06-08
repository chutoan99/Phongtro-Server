import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDto } from './user.dto';
import { plainToClass, plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async saveUser(userDto: UserDto): Promise<UserDto> {
    const savedUser = await this.usersRepository.save(userDto);
    return plainToInstance(UserDto, savedUser, {
      excludeExtraneousValues: true,
    });
  }

  async updateUser(id: string, userDto: UserDto): Promise<{ result: string }> {
    const foundUser = await this.usersRepository.update(id, userDto);
    return { result: 'sucess' };
  }

  async findOne(id: string): Promise<UserDto> {
    const foundUser = await this.usersRepository.findOne({
      where: { id: +id },
    });
    return plainToInstance(UserDto, foundUser, {
      excludeExtraneousValues: true,
    });
  }
  async deleteUser(id: string): Promise<{ result: string }> {
    const foundUser = await this.usersRepository.delete(id);
    return { result: 'sucess' };
  }
}
