import { Field, Int, InputType } from '@nestjs/graphql';
// import { v4 as uuidv4 } from 'uuid';
// import { UUID } from '@nestjs/graphql';
@InputType()
export class InputCreatePost {
  // @Field(() => UUID, { defaultValue: uuidv4() })
  // userid: string;

  @Field(() => String)
  userid!: string;

  @Field(() => String)
  address!: string;

  @Field(() => String)
  areaCode!: string;

  @Field(() => Int)
  areaNumber!: number;

  @Field(() => String)
  categoryCode!: string;

  @Field(() => String)
  description!: string;

  @Field(() => [String])
  images!: [string];

  @Field(() => String)
  label!: string;

  @Field(() => String)
  type!: string;

  @Field(() => String)
  priceCode!: string;

  @Field(() => Int)
  priceNumber!: number;

  @Field(() => String)
  province: string;

  @Field(() => String)
  target: string;

  @Field(() => String)
  title!: string;

  @Field(() => Int)
  start!: number;
}
