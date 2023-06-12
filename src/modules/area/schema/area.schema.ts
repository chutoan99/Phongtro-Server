import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Area {
  @Field((type) => Int)
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
