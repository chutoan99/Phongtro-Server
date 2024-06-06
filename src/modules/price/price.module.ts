import { Module } from '@nestjs/common'
import { PriceService } from './price.service'
import { PriceResolver } from './price.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PriceEntity } from './price.entity'

@Module({
	controllers: [],
	imports: [TypeOrmModule.forFeature([PriceEntity])],
	providers: [PriceResolver, PriceService]
})
export class PriceModule {}
