import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Attribute {
  @Field((type) => ID)
  id: number;

  @Field()
  price: string;

  @Field()
  acreage: string;

  @Field()
  published: string;

  @Field()
  hashtag: string;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
