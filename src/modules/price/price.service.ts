import { Injectable } from '@nestjs/common';
import { PriceEntity } from './model/price.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PriceService {
  constructor(
    @InjectRepository(PriceEntity)
    private readonly priceRepository: Repository<PriceEntity>,
  ) {}
  async findAll() {
    const response = await this.priceRepository.find({
      where: { isActive: true },
    });
    return response;
  }
}
