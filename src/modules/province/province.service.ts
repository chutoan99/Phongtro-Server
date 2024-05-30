import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProvinceEntity } from './model/province.entity';

@Injectable()
export class ProvinceService {
  constructor(
    @InjectRepository(ProvinceEntity)
    private readonly provinceRepository: Repository<ProvinceEntity>,
  ) {}
  async GetAllProvince() {
    const response = await this.provinceRepository.find({
      where: { isActive: true },
    });
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get province.',
      response,
    };
  }

  // async create(province) {
  //   // Create or find Province
  //   const provinceRecord = await this.provinceRepository.findOne({
  //     where: [
  //       { value: province.replace('Thành phố', '') },
  //       { value: province.replace('Tỉnh', '') },
  //     ],
  //   });
  //   let provinceEntity: ProvinceEntity;
  //   if (provinceRecord) {
  //     provinceEntity = provinceRecord;
  //   } else {
  //     provinceEntity = this.provinceRepository.create({
  //       code: province.includes('Thành phố')
  //         ? generateCode(province.replace('Thành phố', ''))
  //         : generateCode(province.replace('Tỉnh', '')),
  //       value: province.includes('Thành phố')
  //         ? province.replace('Thành phố', '')
  //         : province.replace('Tỉnh', ''),
  //     });
  //     const response = await this.provinceRepository.save(provinceEntity);
  //     return response;
  //   }
  // }
}
