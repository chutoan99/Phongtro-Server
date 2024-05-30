import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Province } from './province.schema';

@ObjectType()
export class ProvinceResponse {
  @Field(() => Int)
  err: number;

  @Field()
  msg: string;

  @Field(() => [Province])
  response: Province[];
}
