import { ObjectType, Field, Int } from '@nestjs/graphql'
@ObjectType()
export class Area {
	@Field(() => Int)
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
export class AreaSchema {
	@Field(() => Int)
	err: number

	@Field()
	msg: string

	@Field(() => [Area])
	response: Area[]
}
