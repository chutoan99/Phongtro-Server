import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './model/post.entity';
import {
  Repository,
  Between,
  FindOperator,
  OrderByCondition,
  ILike,
} from 'typeorm';
import { InputPost } from './args/input_post.args';
import { InputNewPost } from './args/input_new_post.args';
import { InputCreatePost } from './args/input_create_post.args';
import { InputUpdatePost } from './args/input_update_post.args';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async findAll(input: InputPost) {
    const title = input.title;
    const start = input.start;
    const address = input.address;
    const categoryCode = input.categoryCode;
    const priceNumber = input.priceNumber;
    const areaNumber = input.areaNumber;
    const provinceCode = input.provinceCode;
    // const userId = input.userid;
    const pageSize = input.pageSize || +process.env.LIMIT;
    const pageNumber = input.pageNumber || 1;
    const orderBy = input.orderBy;
    const direction = input.direction;
    const where = {
      // ...(userId && { userId }),
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

  async findAllNewPost(input: InputNewPost) {
    const pageSize = input.pageSize || +process.env.LIMIT;
    const pageNumber = input.pageNumber || 1;
    const limit = pageSize;
    const offset = pageSize * (pageNumber - 1);
    const [data, totalCount] = await this.postRepository.findAndCount({
      take: limit,
      skip: offset,
    });

    return {
      err: data ? 0 : 1,
      msg: data ? 'OK' : 'Failed to get new post',
      total: totalCount,
      pageNumber,
      pageSize,
      response: data,
    };
  }

  async findById(id: string) {
    const response = await this.postRepository.findOne({
      where: {
        id: id,
      },
    });
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get postId',
      response,
    };
  }

  async createPost(input: InputCreatePost) {
    console.log(input, 'input');
  }

  async updatePost(input: InputUpdatePost) {
    console.log(input, 'input');
  }

  async deletePost(id: string) {
    console.log(id, 'id');
  }
}
