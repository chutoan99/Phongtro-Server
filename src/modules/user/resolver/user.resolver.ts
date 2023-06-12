import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../user.service';
import { UserResponse } from '../schema/userResponse.schema';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserResponse)
  user() {
    const response = this.userService.findAll();
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get user.',
      response,
    };
  }
}
