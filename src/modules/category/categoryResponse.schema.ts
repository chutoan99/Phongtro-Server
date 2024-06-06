import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Category } from './category.schema'

@ObjectType()
export class CategoryResponse {
	@Field(() => Int)
	err: number

	@Field()
	msg: string

	@Field(() => [Category])
	response: Category[]
}
