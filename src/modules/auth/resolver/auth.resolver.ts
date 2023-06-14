import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginResponse } from '../schema/loginResponse.schema';
import { AuthService } from '../auth.service';
import { InputLogin } from '../args/input_login.args';
import { RegisterResponse } from '../schema/registerResponse.schema';
import { InputRegister } from '../args/input_register.args';
import { User } from 'src/modules/user/schema/user.schema';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(@Args('input', { type: () => InputLogin }) input: InputLogin) {
    const response = await this.authService.login(input);
    return response;
  }

  @Mutation(() => RegisterResponse)
  async register(
    @Args('input', { type: () => InputRegister }) input: InputRegister,
  ) {
    const response = await this.authService.register(input);
    return response;
  }
}
