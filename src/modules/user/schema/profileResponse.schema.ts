import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from './user.schema';

@ObjectType()
export class ProfileResponse {
  @Field(() => Int)
  err: number;

  @Field()
  msg: string;

  @Field(() => User)
  response: User;
}
