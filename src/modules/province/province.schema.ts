import { ObjectType, Field, ID, Int } from '@nestjs/graphql'

@ObjectType()
export class Province {
	@Field(() => ID)
	id: number

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
export class ProvinceSchema {
	@Field(() => Int)
	err: number

	@Field()
	msg: string

	@Field(() => [Province])
	response: Province[]
}

