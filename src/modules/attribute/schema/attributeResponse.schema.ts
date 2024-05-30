import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Attribute } from './attribute.schema';

@ObjectType()
export class AttributeResponse {
  @Field(() => Int)
  err: number;

  @Field()
  msg: string;

  @Field(() => [Attribute])
  response: Attribute[];
}
