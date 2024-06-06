import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Province {
  @Field(() => ID)
  id: number;

  @Field()
  code: string;

  @Field()
  value: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
