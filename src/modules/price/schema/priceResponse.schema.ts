import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Price } from './price.schema';

@ObjectType()
export class PriceResponse {
  @Field(() => Int)
  err: number;

  @Field()
  msg: string;

  @Field(() => [Price])
  response: Price[];
}
