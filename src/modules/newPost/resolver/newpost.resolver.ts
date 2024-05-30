import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { AttributeEntity } from 'src/modules/attribute/model/attribute.entity';
import { ImageEntity } from 'src/modules/image/model/image.entity';
import { OverviewEntity } from 'src/modules/overview/model/overview.entity';
import { UserEntity } from 'src/modules/user/model/user.entity';
import { Repository } from 'typeorm';
import { NewPostResponse } from '../schema/newpostResponse.schema';
import { NewPostService } from '../newpost.service';
import { User } from 'src/modules/user/schema/user.schema';
import { Attribute } from 'src/modules/attribute/schema/attribute.schema';
import { Overview } from 'src/modules/overview/schema/overview.schema';
import { InputNewPost } from '../args/input_new_post.args';
import { NewPost } from '../schema/newpost.schema';

@Resolver(() => NewPost)
export class NewPostResolver {
  constructor(
    private readonly newPostService: NewPostService,

    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    @InjectRepository(ImageEntity)
    private readonly imageRepository: Repository<ImageEntity>,

    @InjectRepository(AttributeEntity)
    private readonly attributeRepository: Repository<AttributeEntity>,

    @InjectRepository(OverviewEntity)
    private readonly overviewRepository: Repository<OverviewEntity>,
  ) {}

  @Query(() => NewPostResponse)
  async newPost(
    @Args('input', { type: () => InputNewPost }) input: InputNewPost,
  ) {
    const response = await this.newPostService.findAllNewPost(input);
    return response;
  }

  @ResolveField(() => User)
  async user(@Parent() post: NewPost) {
    const response = await this.userRepository.findOne({
      where: { id: post.userId },
    });
    return response;
  }

  @ResolveField(() => Image)
  async listImage(@Parent() post: NewPost) {
    const response = await this.imageRepository.findOne({
      where: { id: post.imagesId },
    });
    return response;
  }

  @ResolveField(() => Attribute)
  async attributes(@Parent() post: NewPost) {
    const response = await this.attributeRepository.findOne({
      where: { id: post.attributesId },
    });
    return response;
  }

  @ResolveField(() => Overview)
  async overviews(@Parent() post: NewPost) {
    const response = await this.overviewRepository.findOne({
      where: { id: post.overviewId },
    });
    return response;
  }
}
