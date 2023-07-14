import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PostResponse } from '../schema/postResponse.schema';
import { PostService } from '../post.service';
import { User } from 'src/modules/user/schema/user.schema';
import { Post } from '../schema/post.schema';
import { Image } from 'src/modules/image/schema/image.schema';
import { Attribute } from 'src/modules/attribute/schema/attribute.schema';
import { Overview } from 'src/modules/overview/schema/overview.schema';
import { PostIdResponse } from '../schema/postIdResponse.schema';
import { InputPost } from '../args/input_post.args';
import { PostEntity } from '../model/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/modules/user/model/user.entity';
import { ImageEntity } from 'src/modules/image/model/image.entity';
import { AttributeEntity } from 'src/modules/attribute/model/attribute.entity';
import { OverviewEntity } from 'src/modules/overview/model/overview.entity';
import { InputCreatePost } from '../args/input_create_post.args';
import { CreatePostResponse } from '../schema/createPostResponse.schema';
import { UpdatePostResponse } from '../schema/updatePostResponse.schema';
import { InputUpdatePost } from '../args/input_update_post.args';
import { DeletePostResponse } from '../schema/deletePostResponse.schema';

@Resolver(() => Post) // Specify the object type as Post
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,

    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    @InjectRepository(ImageEntity)
    private readonly imageRepository: Repository<ImageEntity>,

    @InjectRepository(AttributeEntity)
    private readonly attributeRepository: Repository<AttributeEntity>,

    @InjectRepository(OverviewEntity)
    private readonly overviewRepository: Repository<OverviewEntity>,
  ) {}

  @Query(() => PostResponse)
  async post(@Args('input', { type: () => InputPost! }) input: InputPost) {
    const response = await this.postService.GetAllPost(input);
    return response;
  }

  @Query(() => PostIdResponse)
  async postId(@Args('postId', { type: () => ID }) id: string) {
    const response = await this.postService.GetPostId(id);
    return response;
  }

  @Mutation(() => CreatePostResponse)
  async createPost(
    @Args('input', { type: () => InputCreatePost }) input: InputCreatePost,
  ) {
    const response = this.postService.CreatePost(input);
    return response;
  }

  @Mutation(() => UpdatePostResponse)
  async updatePost(
    @Args('postId', { type: () => ID }) id: string,
    @Args('input', { type: () => InputUpdatePost }) input: InputUpdatePost,
  ) {
    const response = await this.postService.UpdatePostId(id, input);
    return response;
  }

  @Mutation(() => DeletePostResponse)
  async deletePost(@Args('postId', { type: () => ID }) id: string) {
    const response = this.postService.DeletePostId(id);
    return response;
  }

  @ResolveField(() => User)
  async user(@Parent() post: Post) {
    const response = await this.userRepository.findOne({
      where: { id: post.userId },
    });
    return response;
  }

  @ResolveField(() => Image)
  async listImage(@Parent() post: Post) {
    const response = await this.imageRepository.findOne({
      where: { id: post.imagesId },
    });
    return response;
  }

  @ResolveField(() => Attribute)
  async attributes(@Parent() post: Post) {
    const response = await this.attributeRepository.findOne({
      where: { id: post.attributesId },
    });
    return response;
  }

  @ResolveField(() => Overview)
  async overviews(@Parent() post: Post) {
    const response = await this.overviewRepository.findOne({
      where: { id: post.overviewId },
    });
    return response;
  }
}
