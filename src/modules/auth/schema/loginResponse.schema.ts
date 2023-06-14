import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/modules/user/schema/user.schema';

@ObjectType()
export class LoginResponse {
  @Field((type) => Int)
  err: number;

  @Field()
  msg: string;

  @Field({ nullable: true })
  token: string;

  @Field((type) => User)
  response: User;
}
