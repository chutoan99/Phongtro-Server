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
    const response = await this.attributeRepository.find();
    return response;
  }

  async findById(id: any) {
    const response = await this.attributeRepository.findOne({
      where: { id: id },
    });
    return response;
  }
}
