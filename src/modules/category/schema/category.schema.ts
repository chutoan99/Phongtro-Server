import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field((type) => ID)
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

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
