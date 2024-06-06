import { Injectable } from '@nestjs/common';
import { PriceEntity } from './price.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PriceService {
  constructor(
    @InjectRepository(PriceEntity)
    private readonly _priceRepository: Repository<PriceEntity>,
  ) {}
  async GetAllPrice() {
    const response = await this._priceRepository.find({
      where: { isActive: true },
    });
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get price.',
      response,
    };
  }
}
