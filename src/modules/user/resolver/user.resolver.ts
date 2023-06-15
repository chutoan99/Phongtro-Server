import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from '../user.service';
import { UserResponse } from '../schema/userResponse.schema';
import { UserIdResponse } from '../schema/userIdResponse.schema';
import { PostService } from 'src/modules/post/post.service';
import { Post } from 'src/modules/post/schema/post.schema';
import { User } from '../schema/user.schema';
import { ProfileResponse } from '../schema/profileResponse.schema';
import { UpdateProfileResponse } from '../schema/updateProfileResponse.schema';
import { InputUpdateProfile } from '../args/update_profile.args';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService,
  ) {}

  @Query(() => UserResponse)
  user() {
    const response = this.userService.findAll();
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get user.',
      response,
    };
  }

  @Query(() => UserIdResponse)
  userId(@Args('id', { type: () => ID! }) id: string) {
    const response = this.userService.findById(id);
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get userid',
      response,
    };
  }
  @Query(() => ProfileResponse)
  profile(@Args('id', { type: () => ID! }) id: string) {
    const response = this.userService.findById(id);
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get user profile',
      response,
    };
  }

  @Mutation(() => UpdateProfileResponse)
  async updateProfile(
    @Args('input', { type: () => InputUpdateProfile })
    input: InputUpdateProfile,
  ) {
    console.log(input, 'input');
  }

  @ResolveField(() => Post)
  async post(@Parent() user: User) {
    const post = await this.postService.findById(user.id);
    return post;
  }
}
