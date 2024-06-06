import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from 'src/modules/post/post.schema';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  avatar: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  zalo: string | null;

  @Field({ nullable: true })
  file: string | null;

  @Field(() => [Post])
  post: [Post];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
