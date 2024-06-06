import { ObjectType, Field, ID, Int } from '@nestjs/graphql'

@ObjectType()
export class Category {
	@Field(() => ID)
	id: number

	@Field()
	code: string

	@Field()
	value: string

	@Field()
	header: string

	@Field()
	subHeader: string

	@Field()
	path: string

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
@ObjectType()
export class CategorySchema {
	@Field(() => Int)
	err: number

	@Field()
	msg: string

	@Field(() => [Category])
	response: Category[]
}


