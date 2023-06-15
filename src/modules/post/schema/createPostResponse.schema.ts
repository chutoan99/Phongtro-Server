import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from './post.schema';

@ObjectType()
export class CreatePostResponse {
  @Field((type) => Int)
  err: number;

  @Field()
  msg: string;
}
