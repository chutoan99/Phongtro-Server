import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AreaEntity } from './area.entity';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(AreaEntity)
    private readonly _areaRepository: Repository<AreaEntity>,
  ) {}

  async GetAllArea() {
    const response = await this._areaRepository.find({
      where: { isActive: true },
    });
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get area.',
      response,
    };
  }
}
