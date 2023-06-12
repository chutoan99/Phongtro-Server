import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Attribute } from './attribute.schema';

@ObjectType()
export class AttributeResponse {
  @Field((type) => Int)
  err: number;

  @Field()
  msg: string;

  @Field((type) => [Attribute])
  response: Attribute[];
}
