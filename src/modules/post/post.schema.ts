import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Attribute } from 'src/modules/attribute/attribute.schema';
import { Image } from 'src/modules/image/image.schema';
import { Overview } from 'src/modules/overview/overview.schema';
import { User } from 'src/modules/user/user.schema';

@ObjectType()
export class Post {
  @Field(() => ID, { nullable: true })
  id: number;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  start: string;

  @Field({ nullable: true })
  labelCode: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  attributesId: string;

  @Field({ nullable: true })
  categoryCode: string;

  @Field({ nullable: true })
  priceCode: string;

  @Field({ nullable: true })
  areaCode: string;

  @Field({ nullable: true })
  provinceCode: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  userId: string;

  @Field({ nullable: true })
  overviewId: string;

  @Field({ nullable: true })
  imagesId: string;

  @Field(() => Float, { nullable: true })
  priceNumber: number;

  @Field(() => Float, { nullable: true })
  areaNumber: number;

  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => User)
  user: User;

  @Field(() => Image)
  listImage: Image;

  @Field(() => Attribute)
  attributes: Attribute;

  @Field(() => Overview)
  overviews: Overview;
}
