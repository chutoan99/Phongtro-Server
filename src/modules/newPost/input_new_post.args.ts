import { Field, Int, InputType } from '@nestjs/graphql'

@InputType()
export class InputNewPost {
	@Field(() => Int)
	pageNumber: number

	@Field(() => Int)
	pageSize: number
}
