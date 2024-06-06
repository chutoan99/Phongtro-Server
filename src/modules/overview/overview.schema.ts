import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Overview {
  @Field(() => ID)
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

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
