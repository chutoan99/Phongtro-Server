import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AreaResolver } from './resolver/area.resolver';
import { AreaEntity } from './model/area.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AreaEntity])],
  controllers: [],
  providers: [AreaService, AreaResolver],
})
export class AreaModule {}
