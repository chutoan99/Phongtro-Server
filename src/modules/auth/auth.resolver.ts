import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { User } from 'src/modules/user/user.schema'
import { InputLogin, InputRegister } from './auth.args'
import { LoginSchema, RegisterSchema } from './auth.schema'

@Resolver(() => User)
export class AuthResolver {
	constructor(private readonly _authService: AuthService) {}

	@Mutation(() => LoginSchema)
	async login(@Args('input', { type: () => InputLogin }) input: InputLogin) {
		const response = await this._authService.login(input)
		return response
	}

	@Mutation(() => RegisterSchema)
	async register(@Args('input', { type: () => InputRegister }) input: InputRegister) {
		const response = await this._authService.register(input)
		return response
	}
}
