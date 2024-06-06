import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { Post } from 'src/modules/post/post.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from 'src/modules/post/post.entity';
import { User } from './user.schema';
import { UserResponse } from './userResponse.schema';
import { UserIdResponse } from './userIdResponse.schema';
import { UpdateProfileResponse } from './updateProfileResponse.schema';
import { InputUpdateProfile } from './update_profile.args';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly _userService: UserService,

    @InjectRepository(PostEntity)
    private readonly _postRepository: Repository<PostEntity>,
  ) {}

  // GET ALL USER
  @Query(() => UserResponse)
  user() {
    const response = this._userService.getAllUser();
    return response;
  }

  // GET CURRENT USER
  @Query(() => UserIdResponse)
  async userId(@Args('userId', { type: () => ID }) id: string) {
    const response = await this._userService.getCurrentUser(id);
    return response;
  }

  // UPDATE USER
  @Mutation(() => UpdateProfileResponse)
  async updateProfile(
    @Args('userId', { type: () => ID }) id: string,
    @Args('input', { type: () => InputUpdateProfile })
    input: InputUpdateProfile,
  ): Promise<UpdateProfileResponse> {
    const response = await this._userService.updateUser(id, input);
    return response;
  }

  @ResolveField(() => Post)
  async post(@Parent() user: User) {
    const post = await this._postRepository.find({
      where: { userId: user.id, isActive: true },
    });
    return post;
  }
}
