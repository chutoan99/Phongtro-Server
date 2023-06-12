import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Price {
  @Field((type) => ID)
  id: number;

  @Field((type) => Int)
  order: number;

  @Field()
  code: string;

  @Field()
  value: string;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
