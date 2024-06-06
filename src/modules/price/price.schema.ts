import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Price {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  order: number;

  @Field()
  code: string;

  @Field()
  value: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
