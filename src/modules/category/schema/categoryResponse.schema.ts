import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from './category.schema';

@ObjectType()
export class CategoryResponse {
  @Field((type) => Int)
  err: number;

  @Field()
  msg: string;

  @Field((type) => [Category])
  response: Category[];
}
