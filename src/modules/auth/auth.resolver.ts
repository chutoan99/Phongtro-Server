import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { LoginResponse } from './loginResponse.schema'
import { AuthService } from './auth.service'
import { RegisterResponse } from './registerResponse.schema'
import { User } from 'src/modules/user/user.schema'
import { InputLogin } from './input_login.args'
import { InputRegister } from './input_register.args'

@Resolver(() => User)
export class AuthResolver {
	constructor(private readonly _authService: AuthService) {}

	@Mutation(() => LoginResponse)
	async login(@Args('input', { type: () => InputLogin }) input: InputLogin) {
		const response = await this._authService.login(input)
		return response
	}

	@Mutation(() => RegisterResponse)
	async register(@Args('input', { type: () => InputRegister }) input: InputRegister) {
		const response = await this._authService.register(input)
		return response
	}
}
