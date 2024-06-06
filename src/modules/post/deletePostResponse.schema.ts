import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class DeletePostResponse {
	@Field(() => Int)
	err: number

	@Field()
	msg: string
}
