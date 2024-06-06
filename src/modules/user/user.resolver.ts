import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { Post } from 'src/modules/post/post.schema'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { PostEntity } from 'src/modules/post/post.entity'
import { UpdateUserSchema, User, UserIdSchema, UserSchema } from './user.schema'
import { InputUpdateProfile } from './user.args'

@Resolver(() => User)
export class UserResolver {
	constructor(
		private readonly _userService: UserService,

		@InjectRepository(PostEntity)
		private readonly _postRepository: Repository<PostEntity>
	) {}

	@Query(() => UserSchema)
	user() {
		const response = this._userService.getAllUser()
		return response
	}

	@Query(() => UserIdSchema)
	async userId(@Args('userId', { type: () => ID }) id: string) {
		const response = await this._userService.getCurrentUser(id)
		return response
	}

	@Mutation(() => UpdateUserSchema)
	async updateProfile(
		@Args('userId', { type: () => ID }) id: string,
		@Args('input', { type: () => InputUpdateProfile })
		input: InputUpdateProfile
	): Promise<UpdateUserSchema> {
		const response = await this._userService.updateUser(id, input)
		return response
	}

	@ResolveField(() => Post)
	async post(@Parent() user: User) {
		const post = await this._postRepository.find({
			where: { userId: user.id, isActive: true }
		})
		return post
	}
}
