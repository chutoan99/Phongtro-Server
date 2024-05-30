import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from './post.schema';

@ObjectType()
export class PostResponse {
  @Field(() => Int)
  err: number;

  @Field()
  msg: string;

  @Field(() => Int)
  totalPage: number;

  @Field(() => [Post])
  response: Post[];

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  pageNumber: number;

  @Field(() => Int)
  pageSize: number;
}
