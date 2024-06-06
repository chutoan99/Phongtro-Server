import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class InputRegister {
	@Field(() => String)
	name: string

	@Field(() => String)
	phone: string

	@Field(() => String)
	password: string
}
