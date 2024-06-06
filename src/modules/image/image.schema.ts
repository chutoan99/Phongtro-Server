import { ObjectType, Field, Int, ID } from '@nestjs/graphql'
@ObjectType()
export class Image {
	@Field(() => ID)
	id: number

	@Field(() => Int)
	total: number

	@Field()
	image: string

	@Field({ nullable: true })
	postImg: string

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}

@ObjectType()
export class ImageSchema {
	@Field(() => Int)
	err: number

	@Field()
	msg: string

	@Field(() => [Image])
	response: Image[]
}


