import { Injectable } from '@nestjs/common';
import { OverviewEntity } from './model/overview.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OverviewService {
  constructor(
    @InjectRepository(OverviewEntity)
    private readonly overviewRepository: Repository<OverviewEntity>,
  ) {}
  async findById(id: any) {
    const response = await this.overviewRepository.findOne({
      where: { id: id },
    });
    return response;
  }
}
