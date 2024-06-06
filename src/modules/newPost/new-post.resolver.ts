import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { InjectRepository } from '@nestjs/typeorm'
import { AttributeEntity } from 'src/modules/attribute/attribute.entity'
import { OverviewEntity } from 'src/modules/overview/overview.entity'
import { UserEntity } from 'src/modules/user/user.entity'
import { Repository } from 'typeorm'
import { NewPostService } from './new-post.service'
import { User } from 'src/modules/user/user.schema'
import { Overview } from 'src/modules/overview/overview.schema'
import { Attribute } from 'src/modules/attribute/attribute.schema'
import { ImageEntity } from 'src/modules/image/image.entity'
import { InputNewPost } from './new_post.args'
import { NewPost, NewPostSchema } from './new-post.schema'

@Resolver(() => NewPost)
export class NewPostResolver {
	constructor(
		private readonly _newPostService: NewPostService,
		@InjectRepository(UserEntity)
		private readonly _userRepository: Repository<UserEntity>,
		@InjectRepository(ImageEntity)
		private readonly _imageRepository: Repository<ImageEntity>,
		@InjectRepository(AttributeEntity)
		private readonly _attributeRepository: Repository<AttributeEntity>,
		@InjectRepository(OverviewEntity)
		private readonly _overviewRepository: Repository<OverviewEntity>
	) {}

	@Query(() => NewPostSchema)
	async newPost(@Args('input', { type: () => InputNewPost }) input: InputNewPost) {
		const response = await this._newPostService.findAllNewPost(input)
		return response
	}

	@ResolveField(() => User)
	async user(@Parent() post: NewPost) {
		const response = await this._userRepository.findOne({
			where: { id: post.userId }
		})
		return response
	}

	@ResolveField(() => Image)
	async listImage(@Parent() post: NewPost) {
		const response = await this._imageRepository.findOne({
			where: { id: post.imagesId }
		})
		return response
	}

	@ResolveField(() => Attribute)
	async attributes(@Parent() post: NewPost) {
		const response = await this._attributeRepository.findOne({
			where: { id: post.attributesId }
		})
		return response
	}

	@ResolveField(() => Overview)
	async overviews(@Parent() post: NewPost) {
		const response = await this._overviewRepository.findOne({
			where: { id: post.overviewId }
		})
		return response
	}
}
