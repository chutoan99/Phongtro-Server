import { Injectable } from '@nestjs/common';
import { InputNewPost } from './input_new_post.args';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../post/post.entity';

@Injectable()
export class NewPostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly _postRepository: Repository<PostEntity>,
  ) {}

  async findAllNewPost(input: InputNewPost) {
    const pageSize = input.pageSize || +process.env.LIMIT;
    const pageNumber = input.pageNumber || 1;
    const limit = pageSize;
    const offset = pageSize * (pageNumber - 1);
    const [data, totalCount] = await this._postRepository.findAndCount({
      where: { isActive: true },
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
}
