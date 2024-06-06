import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Image } from './image.schema'

@ObjectType()
export class ImageResponse {
	@Field(() => Int)
	err: number

	@Field()
	msg: string

	@Field(() => [Image])
	response: Image[]
}
