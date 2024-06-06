import { ObjectType, Field, Int, ID } from '@nestjs/graphql'
@ObjectType()
export class Price {
	@Field(() => ID)
	id: number

	@Field(() => Int)
	order: number

	@Field()
	code: string

	@Field()
	value: string

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
@ObjectType()
export class PriceSchema {
	@Field(() => Int)
	err: number

	@Field()
	msg: string

	@Field(() => [Price])
	response: Price[]
}
