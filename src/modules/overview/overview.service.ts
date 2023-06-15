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
}
