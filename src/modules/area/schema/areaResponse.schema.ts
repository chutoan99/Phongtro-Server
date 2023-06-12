import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Area } from './area.schema';

@ObjectType()
export class AreaResponse {
  @Field((type) => Int)
  err: number;

  @Field()
  msg: string;

  @Field((type) => [Area])
  response: Area[];
}
