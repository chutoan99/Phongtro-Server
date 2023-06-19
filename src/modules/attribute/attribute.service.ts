import { Injectable } from '@nestjs/common';
import { AttributeEntity } from './model/attribute.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AttributeService {
  constructor(
    @InjectRepository(AttributeEntity)
    private readonly attributeRepository: Repository<AttributeEntity>,
  ) {}
  async findAll() {
    const response = await this.attributeRepository.find({
      where: { isActive: true },
    });
    return response;
  }
}
