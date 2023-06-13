import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Overview {
  @Field((type) => ID)
  id: number;

  @Field()
  code: string;

  @Field()
  area: string;

  @Field()
  type: string;

  @Field()
  target: string;

  @Field()
  created: string;

  @Field()
  expired: string;

  @Field()
  bonus: string;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
