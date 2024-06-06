import { Field, InputType, ObjectType, Int } from '@nestjs/graphql'
import { User } from '../user/user.schema'

@ObjectType()
export class LoginSchema {
	@Field(() => Int)
	err: number

	@Field()
	msg: string

	@Field({ nullable: true })
	token: string

	@Field(() => User)
	response: User
}

@ObjectType()
export class RegisterSchema {
	@Field(() => Int)
	err: number

	@Field()
	msg: string

	@Field({ nullable: true })
	token: string
}
