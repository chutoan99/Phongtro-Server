import { Module } from '@nestjs/common'

import { ProvinceService } from './province.service'
import { ProvinceResolver } from './province.resolver'
import { ProvinceEntity } from './province.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
	controllers: [],
	imports: [TypeOrmModule.forFeature([ProvinceEntity])],
	providers: [ProvinceService, ProvinceResolver],
	exports: [ProvinceService]
})
export class ProvinceModule {}
