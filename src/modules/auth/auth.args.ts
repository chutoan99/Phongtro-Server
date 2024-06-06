import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class InputLogin {
	@Field(() => String)
	phone: string

	@Field(() => String)
	password: string
}

@InputType()
export class InputRegister {
	@Field(() => String)
	name: string

	@Field(() => String)
	phone: string

	@Field(() => String)
	password: string
}
