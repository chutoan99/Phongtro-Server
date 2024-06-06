import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PostService } from './post.service'
import { User } from 'src/modules/user/user.schema'
import { Image } from 'src/modules/image/image.schema'
import { Overview } from 'src/modules/overview/overview.schema'
import { InputCreatePost, InputPost, InputUpdatePost } from './post.args'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from 'src/modules/user/user.entity'
import { AttributeEntity } from 'src/modules/attribute/attribute.entity'
import { OverviewEntity } from 'src/modules/overview/overview.entity'
import { Attribute } from 'src/modules/attribute/attribute.schema'
import { ImageEntity } from 'src/modules/image/image.entity'
import { Post, PostIdSchema, PostSchema, UpdatePostSchema, CreatePostSchema, DeletePostSchema } from './post.schema'
import { PostEntity } from './post.entity'

@Resolver(() => Post) // Specify the object type as Post
export class PostResolver {
	constructor(
		private readonly _postService: PostService,
		@InjectRepository(PostEntity)
		private readonly _postRepository: Repository<PostEntity>,

		@InjectRepository(UserEntity)
		private readonly _userRepository: Repository<UserEntity>,

		@InjectRepository(ImageEntity)
		private readonly _imageRepository: Repository<ImageEntity>,

		@InjectRepository(AttributeEntity)
		private readonly _attributeRepository: Repository<AttributeEntity>,

		@InjectRepository(OverviewEntity)
		private readonly _overviewRepository: Repository<OverviewEntity>
	) {}

	@Query(() => PostSchema)
	async post(@Args('input', { type: () => InputPost }) input: InputPost) {
		const response = await this._postService.GetAllPost(input)
		return response
	}

	@Query(() => PostIdSchema)
	async postId(@Args('postId', { type: () => ID }) id: string) {
		const response = await this._postService.GetPostId(id)
		return response
	}

	@Mutation(() => CreatePostSchema)
	async createPost(@Args('input', { type: () => InputCreatePost }) input: InputCreatePost) {
		const response = this._postService.CreatePost(input)
		return response
	}

	@Mutation(() => UpdatePostSchema)
	async updatePost(
		@Args('postId', { type: () => ID }) id: string,
		@Args('input', { type: () => InputUpdatePost }) input: InputUpdatePost
	) {
		const response = await this._postService.UpdatePostId(id, input)
		return response
	}

	@Mutation(() => DeletePostSchema)
	async deletePost(@Args('postId', { type: () => ID }) id: string) {
		const response = this._postService.DeletePostId(id)
		return response
	}

	@ResolveField(() => User)
	async user(@Parent() post: Post) {
		const response = await this._userRepository.findOne({
			where: { id: post.userId }
		})
		return response
	}

	@ResolveField(() => Image)
	async listImage(@Parent() post: Post) {
		const response = await this._imageRepository.findOne({
			where: { id: post.imagesId }
		})
		return response
	}

	@ResolveField(() => Attribute)
	async attributes(@Parent() post: Post) {
		const response = await this._attributeRepository.findOne({
			where: { id: post.attributesId }
		})
		return response
	}

	@ResolveField(() => Overview)
	async overviews(@Parent() post: Post) {
		const response = await this._overviewRepository.findOne({
			where: { id: post.overviewId }
		})
		return response
	}
}
