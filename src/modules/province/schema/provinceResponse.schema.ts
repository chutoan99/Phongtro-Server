import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Province } from './province.schema';

@ObjectType()
export class ProvinceResponse {
  @Field((type) => Int)
  err: number;

  @Field()
  msg: string;

  @Field((type) => [Province])
  response: Province[];
}
