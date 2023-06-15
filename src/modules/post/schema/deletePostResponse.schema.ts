import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from './post.schema';

@ObjectType()
export class DeletePostResponse {
  @Field((type) => Int)
  err: number;

  @Field()
  msg: string;
}
