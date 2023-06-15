import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from './user.schema';

@ObjectType()
export class ProfileResponse {
  @Field((type) => Int)
  err: number;

  @Field()
  msg: string;

  @Field((type) => User)
  response: User;
}
