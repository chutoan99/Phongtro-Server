import { Injectable } from '@nestjs/common';
import { InputNewPost } from './args/input_new_post.args';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../post/model/post.entity';

@Injectable()
export class NewPostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

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
}
