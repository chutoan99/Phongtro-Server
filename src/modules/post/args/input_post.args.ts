import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class InputPost {
  @Field(() => Int)
  pageNumber: number;

  @Field(() => Int)
  pageSize: number;

  @Field(() => String)
  orderBy: string;

  @Field(() => String)
  direction: string;

  @Field(() => String)
  userid: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  start: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  categoryCode: string;

  @Field(() => [Int])
  priceNumber: number[];

  @Field(() => [Int])
  areaNumber: number[];

  @Field(() => String)
  provinceCode: string;
}
