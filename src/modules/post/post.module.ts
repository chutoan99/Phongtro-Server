import { Module } from '@nestjs/common'

import { PostService } from './post.service'
import { PostResolver } from './post.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostEntity } from './post.entity'
import { UserEntity } from '../user/user.entity'
import { ImageEntity } from '../image/image.entity'
import { AttributeEntity } from '../attribute/attribute.entity'
import { OverviewEntity } from '../overview/overview.entity'
import { InputCreatePost, InputPost, InputUpdatePost } from './post.args'
import { ProvinceEntity } from '../province/province.entity'
import { LabelEntity } from '../label/label.entity'
import { ProvinceService } from '../province/province.service'

@Module({
	imports: [
		TypeOrmModule.forFeature([
			PostEntity,
			ProvinceEntity,
			AttributeEntity,
			LabelEntity,
			ImageEntity,
			OverviewEntity,
			UserEntity
		])
	],
	providers: [PostResolver, PostService, InputPost, InputCreatePost, InputUpdatePost, ProvinceService]
})
export class PostModule {}
