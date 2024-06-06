import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class InputUpdateProfile {
	@Field()
	name: string

	@Field({ nullable: true })
	avatar: string

	@Field({ nullable: true })
	phone: string

	@Field({ nullable: true })
	zalo: string | null

	@Field({ nullable: true })
	file: string | null
}
