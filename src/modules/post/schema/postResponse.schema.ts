import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from './post.schema';

@ObjectType()
export class PostResponse {
  @Field((type) => Int)
  err: number;

  @Field()
  msg: string;

  @Field((type) => Int)
  totalPage: number;

  @Field((type) => [Post])
  response: Post[];

  @Field((type) => Int)
  total: number;

  @Field((type) => Int)
  pageNumber: number;

  @Field((type) => Int)
  pageSize: number;
}
