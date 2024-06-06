import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class CreatePostResponse {
	@Field(() => Int)
	err: number

	@Field()
	msg: string
}
