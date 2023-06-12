import { Module } from '@nestjs/common';

import { ProvinceService } from './province.service';
import { ProvinceResolver } from './resolver/province.resolver';
import { ProvinceEntity } from './model/province.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [],
  imports: [TypeOrmModule.forFeature([ProvinceEntity])],
  providers: [ProvinceService, ProvinceResolver],
})
export class ProvinceModule {}
