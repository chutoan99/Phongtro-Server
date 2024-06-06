import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => ID)
  id: number;

  @Field()
  code: string;

  @Field()
  value: string;

  @Field()
  header: string;

  @Field()
  subHeader: string;

  @Field()
  path: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
