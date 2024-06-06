import { ObjectType, Field, ID, Int } from '@nestjs/graphql'
@ObjectType()
export class Attribute {
	@Field(() => ID)
	id: number

	@Field()
	price: string

	@Field()
	acreage: string

	@Field()
	published: string

	@Field()
	hashtag: string

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
@ObjectType()
export class AttributeSchema {
	@Field(() => Int)
	err: number

	@Field()
	msg: string

	@Field(() => [Attribute])
	response: Attribute[]
}
