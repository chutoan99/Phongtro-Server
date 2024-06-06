import { ObjectType, Field, Int } from '@nestjs/graphql'
import { User } from 'src/modules/user/user.schema'

@ObjectType()
export class LoginResponse {
	@Field(() => Int)
	err: number

	@Field()
	msg: string

	@Field({ nullable: true })
	token: string

	@Field(() => User)
	response: User
}
