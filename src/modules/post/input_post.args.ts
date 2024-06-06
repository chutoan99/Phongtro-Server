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
  title: string;

  @Field(() => String)
  start: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  categoryCode: string;

  @Field(() => String)
  provinceCode: string;

  @Field(() => [Int], { nullable: true })
  priceNumber: number[];

  @Field(() => [Int], { nullable: true })
  areaNumber: number[];
}
