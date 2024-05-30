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
import { Post } from 'src/modules/post/schema/post.schema';
import { User } from '../schema/user.schema';
import { UpdateProfileResponse } from '../schema/updateProfileResponse.schema';
import { InputUpdateProfile } from '../args/update_profile.args';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from 'src/modules/post/model/post.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,

    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  // GET ALL USER
  @Query(() => UserResponse)
  user() {
    const response = this.userService.getAllUser();
    return response;
  }

  // GET CURRENT USER
  @Query(() => UserIdResponse)
  async userId(@Args('userId', { type: () => ID }) id: string) {
    const response = await this.userService.getCurrentUser(id);
    return response;
  }

  // UPDATE USER
  @Mutation(() => UpdateProfileResponse)
  async updateProfile(
    @Args('userId', { type: () => ID }) id: string,
    @Args('input', { type: () => InputUpdateProfile })
    input: InputUpdateProfile,
  ): Promise<UpdateProfileResponse> {
    const response = await this.userService.updateUser(id, input);
    return response;
  }

  @ResolveField(() => Post)
  async post(@Parent() user: User) {
    const post = await this.postRepository.find({
      where: { userId: user.id, isActive: true },
    });
    return post;
  }
}
