import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class InputUpdatePost {
  // @Field(() => String)
  // userid!: string;

  @Field(() => String)
  address!: string;

  @Field(() => String)
  title!: string;

  // @Field(() => String)
  // areaCode!: string;

  // @Field(() => Int)
  // areaNumber!: number;

  // @Field(() => String)
  // categoryCode!: string;

  // @Field(() => [String])
  // description!: [string];

  // @Field(() => [String])
  // images!: [string];

  // @Field(() => String)
  // label!: string;

  // @Field(() => String)
  // type!: string;

  // @Field(() => String)
  // priceCode!: string;

  // @Field(() => Int)
  // priceNumber!: number;

  // @Field(() => String)
  // province: string;

  // @Field(() => String)
  // target: string;

  // @Field(() => Int)
  // start!: number;
}
