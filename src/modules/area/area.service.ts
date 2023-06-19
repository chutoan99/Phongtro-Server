import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AreaEntity } from './model/area.entity';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(AreaEntity)
    private readonly areaRepository: Repository<AreaEntity>,
  ) {}
  async findAll() {
    const response = await this.areaRepository.find({
      where: { isActive: true },
    });
    return response;
  }
}
