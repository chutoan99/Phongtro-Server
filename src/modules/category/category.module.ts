import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryEntity } from './category.entity'
import { CategoryResolver } from './category.resolver'
import { CategoryService } from './category.service'

@Module({
	imports: [TypeOrmModule.forFeature([CategoryEntity])],
	controllers: [],
	providers: [CategoryService, CategoryResolver]
})
export class CategoryModule {}
