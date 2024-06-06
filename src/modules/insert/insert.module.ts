import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { InsertController } from './insert.controller'
import { InsertService } from './insert.service'

import { AreaEntity } from '../area/area.entity'
import { AttributeEntity } from '../attribute/attribute.entity'
import { CategoryEntity } from '../category/category.entity'
import { ImageEntity } from '../image/image.entity'
import { LabelEntity } from '../label/label.entity'
import { OverviewEntity } from '../overview/overview.entity'
import { PostEntity } from '../post/post.entity'
import { PriceEntity } from '../price/price.entity'
import { ProvinceEntity } from '../province/province.entity'
import { UserEntity } from '../user/user.entity'

@Module({
	imports: [
		TypeOrmModule.forFeature([
			AreaEntity,
			CategoryEntity,
			PriceEntity,
			ProvinceEntity,
			LabelEntity,
			ImageEntity,
			PostEntity,
			AttributeEntity,
			OverviewEntity,
			UserEntity
		])
	],
	controllers: [InsertController],
	providers: [InsertService]
})
export class InsertModule {}
