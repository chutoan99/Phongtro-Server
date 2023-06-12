import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Image } from './image.schema';

@ObjectType()
export class ImageResponse {
  @Field((type) => Int)
  err: number;

  @Field()
  msg: string;

  @Field((type) => [Image])
  response: Image[];
}
