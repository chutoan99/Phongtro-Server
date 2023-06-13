import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './model/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}
  async findAll() {
    const response = await this.postRepository.find();
    return response;
  }

  async findById(id: string) {
    const response = await this.postRepository.findOne({
      where: {
        id: id,
      },
    });
    return response;
  }
}
