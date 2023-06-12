import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  phone: string;

  @Field()
  zalo: string;

  // @Field()
  // post: Post;

  @Field()
  avatar: string;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
