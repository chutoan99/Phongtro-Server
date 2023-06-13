import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PostResponse } from '../schema/postResponse.schema';
import { PostService } from '../post.service';
import { User } from 'src/modules/user/schema/user.schema';
import { UserService } from 'src/modules/user/user.service';
import { Post } from '../schema/post.schema';
import { Image } from 'src/modules/image/schema/image.schema';
import { Attribute } from 'src/modules/attribute/schema/attribute.schema';
import { Overview } from 'src/modules/overview/schema/overview.schema';
import { PostIdResponse } from '../schema/postIdResponse.schema';
import { InputPost } from '../args/input_post.args';
import { PostEntity } from '../model/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  Between,
  FindOperator,
  OrderByCondition,
  ILike,
} from 'typeorm';
import { UserEntity } from 'src/modules/user/model/user.entity';
import { ImageEntity } from 'src/modules/image/model/image.entity';
import { AttributeEntity } from 'src/modules/attribute/model/attribute.entity';
import { OverviewEntity } from 'src/modules/overview/model/overview.entity';
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
  async post(@Args('input', { type: () => InputPost }) input: InputPost) {
    const title = input.title;
    const start = input.start;
    const address = input.address;
    const categoryCode = input.categoryCode;
    const priceNumber = input.priceNumber;
    const areaNumber = input.areaNumber;
    const provinceCode = input.provinceCode;
    const userId = input.userid;
    const pageSize = input.pageSize || +process.env.LIMIT;
    const pageNumber = input.pageNumber || 1;
    const orderBy = input.orderBy;
    const direction = input.direction;
    const where = {
      ...(userId && { userId }),
      ...(title && { title: ILike(`%${title}%`) }),
      ...(address && { address: ILike(`%${address}%`) }),
      ...(start && { start }),
      ...(categoryCode && { categoryCode }),
      ...(provinceCode && { provinceCode }),
      ...(priceNumber && {
        priceNumber: Array.isArray(priceNumber)
          ? Between(priceNumber[0], priceNumber[1])
          : (priceNumber as FindOperator<number>),
      }),
      ...(areaNumber && {
        areaNumber: Array.isArray(areaNumber)
          ? Between(areaNumber[0], areaNumber[1])
          : (areaNumber as FindOperator<number>),
      }),
    };
    const columnToOrderCondition: { [key: string]: 'ASC' | 'DESC' } = {
      createdAt: 'DESC',
      // Add more column names and their corresponding order conditions here
    };

    const defaultOrderBy = 'createdAt';
    const defaultDirection = 'DESC';

    const order: OrderByCondition = {
      [orderBy || defaultOrderBy]:
        columnToOrderCondition[direction || defaultDirection],
    };

    const limit = pageSize;
    const offset = pageSize * (pageNumber - 1);
    const [data, totalCount] = await this.postRepository.findAndCount({
      where: where,
      take: limit,
      skip: offset,
    });

    return {
      err: data ? 0 : 1,
      msg: data ? 'OK' : 'Failed to get post',
      total: totalCount,
      pageNumber,
      pageSize,
      response: data,
    };
  }

  @Query(() => PostIdResponse)
  postId(@Args('id', { type: () => ID }) id: string) {
    const response = this.postService.findById(id);
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get postId',
      response,
    };
  }

  // @ResolveField(() => User)
  // async user(@Parent() post: Post) {
  //   const response = await this.userRepository.findOne({
  //     where: { id: post.userId },
  //   });
  //   return response;
  // }

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
