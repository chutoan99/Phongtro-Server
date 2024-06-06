import { ObjectType, Field, Int } from '@nestjs/graphql'
import { NewPost } from './new-post.schema'

@ObjectType()
export class NewPostResponse {
	@Field(() => Int)
	err: number

	@Field()
	msg: string

	@Field(() => [NewPost])
	response: NewPost[]

	@Field(() => Int)
	total: number

	@Field(() => Int)
	pageNumber: number

	@Field(() => Int)
	pageSize: number
}
