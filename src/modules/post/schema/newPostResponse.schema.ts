import { ObjectType, Field, Int } from '@nestjs/graphql';
import { NewPost } from './newPost.schema';

@ObjectType()
export class NewPostResponse {
  @Field((type) => Int)
  err: number;

  @Field()
  msg: string;

  @Field((type) => [NewPost])
  response: NewPost[];

  @Field((type) => Int)
  total: number;

  @Field((type) => Int)
  pageNumber: number;

  @Field((type) => Int)
  pageSize: number;
}
