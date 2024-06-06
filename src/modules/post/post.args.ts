import { Field, Int, InputType, ObjectType } from '@nestjs/graphql'

@InputType()
export class InputPost {
	@Field(() => Int)
	pageNumber: number

	@Field(() => Int)
	pageSize: number

	@Field(() => String)
	orderBy: string

	@Field(() => String)
	direction: string

	@Field(() => String)
	title: string

	@Field(() => String)
	start: string

	@Field(() => String)
	address: string

	@Field(() => String)
	categoryCode: string

	@Field(() => String)
	provinceCode: string

	@Field(() => [Int], { nullable: true })
	priceNumber: number[]

	@Field(() => [Int], { nullable: true })
	areaNumber: number[]
}

@InputType()
export class InputCreatePost {
	// @Field(() => UUID, { defaultValue: uuidv4() })
	// userid: string;

	@Field(() => String)
	userid!: string

	@Field(() => String)
	address!: string

	@Field(() => String)
	areaCode!: string

	@Field(() => Int)
	areaNumber!: number

	@Field(() => String)
	categoryCode!: string

	@Field(() => String)
	description!: string

	@Field(() => [String])
	images!: [string]

	@Field(() => String)
	label!: string

	@Field(() => String)
	type!: string

	@Field(() => String)
	priceCode!: string

	@Field(() => Int)
	priceNumber!: number

	@Field(() => String)
	province: string

	@Field(() => String)
	target: string

	@Field(() => String)
	title!: string

	@Field(() => Int)
	start!: number
}

@InputType()
export class InputUpdatePost {
	// @Field(() => String)
	// userid!: string;

	@Field(() => String)
	address!: string

	@Field(() => String)
	title!: string

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
