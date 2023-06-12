import { Module } from '@nestjs/common';

import { ProvinceService } from './province.service';

@Module({
  controllers: [],
  providers: [ProvinceService],
})
export class ProvinceModule {}
