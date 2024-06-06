import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Post } from './post.schema'

@ObjectType()
export class UpdatePostResponse {
	@Field(() => Int)
	err: number

	@Field()
	msg: string

	@Field(() => Post)
	response: Post
}
