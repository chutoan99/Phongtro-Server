import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Price } from './price.schema';

@ObjectType()
export class PriceResponse {
  @Field((type) => Int)
  err: number;

  @Field()
  msg: string;

  @Field((type) => [Price])
  response: Price[];
}
