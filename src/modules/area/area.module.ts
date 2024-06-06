import { Module } from '@nestjs/common'
import { AreaService } from './area.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AreaResolver } from './area.resolver'
import { AreaEntity } from './area.entity'

@Module({
	imports: [TypeOrmModule.forFeature([AreaEntity])],
	controllers: [],
	providers: [AreaService, AreaResolver]
})
export class AreaModule {}
