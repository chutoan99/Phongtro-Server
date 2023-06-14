import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Post } from 'src/modules/post/schema/post.schema';

@ObjectType()
export class User {
  @Field((type) => ID)
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

  @Field(() => Post)
  post: Post;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
