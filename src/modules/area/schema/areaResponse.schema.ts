import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Area } from './area.schema';

@ObjectType()
export class AreaResponse {
  @Field(() => Int)
  err: number;

  @Field()
  msg: string;

  @Field(() => [Area])
  response: Area[];
}
