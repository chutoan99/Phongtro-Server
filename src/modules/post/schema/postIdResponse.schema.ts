import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from './post.schema';

@ObjectType()
export class PostIdResponse {
  @Field((type) => Int)
  err: number;

  @Field()
  msg: string;

  @Field((type) => Post)
  response: Post;
}
