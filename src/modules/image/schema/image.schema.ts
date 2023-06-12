import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Image {
  @Field((type) => ID)
  id: number;

  @Field((type) => Int)
  total: number;

  @Field()
  image: string;

  @Field({ nullable: true })
  postImg: string;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
