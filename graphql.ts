
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface InputPost {
    pageNumber: number;
    pageSize: number;
    orderBy: string;
    direction: string;
    userid: string;
    title: string;
    start: string;
    address: string;
    categoryCode: string;
    priceNumber: number[];
    areaNumber: number[];
    provinceCode: string;
}

export interface InputLogin {
    phone: string;
    password: string;
}

export interface InputRegister {
    name: string;
    phone: string;
    password: string;
}

export interface Area {
    id: number;
    order: number;
    code: string;
    value: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface AreaResponse {
    err: number;
    msg: string;
    response: Area[];
}

export interface Category {
    id: string;
    code: string;
    value: string;
    header: string;
    subHeader: string;
    path: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface CategoryResponse {
    err: number;
    msg: string;
    response: Category[];
}

export interface Attribute {
    id: string;
    price: string;
    acreage: string;
    published: string;
    hashtag: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface AttributeResponse {
    err: number;
    msg: string;
    response: Attribute[];
}

export interface Image {
    id: string;
    total: number;
    image: string;
    postImg?: Nullable<string>;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface ImageResponse {
    err: number;
    msg: string;
    response: Image[];
}

export interface Province {
    id: string;
    code: string;
    value: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface ProvinceResponse {
    err: number;
    msg: string;
    response: Province[];
}

export interface Price {
    id: string;
    order: number;
    code: string;
    value: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface PriceResponse {
    err: number;
    msg: string;
    response: Price[];
}

export interface Overview {
    id: string;
    code: string;
    area: string;
    type: string;
    target: string;
    created: string;
    expired: string;
    bonus: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface Post {
    id?: Nullable<string>;
    title?: Nullable<string>;
    start?: Nullable<string>;
    labelCode?: Nullable<string>;
    address?: Nullable<string>;
    attributesId?: Nullable<string>;
    categoryCode?: Nullable<string>;
    priceCode?: Nullable<string>;
    areaCode?: Nullable<string>;
    provinceCode?: Nullable<string>;
    description?: Nullable<string>;
    userId?: Nullable<string>;
    overviewId?: Nullable<string>;
    imagesId?: Nullable<string>;
    priceNumber?: Nullable<number>;
    areaNumber?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    user: User;
    listImage: Image;
    attributes: Attribute;
    overviews: Overview;
}

export interface User {
    id: string;
    name: string;
    password: string;
    avatar?: Nullable<string>;
    phone?: Nullable<string>;
    zalo?: Nullable<string>;
    file?: Nullable<string>;
    post: Post;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface UserResponse {
    err: number;
    msg: string;
    response: User[];
}

export interface UserIdResponse {
    err: number;
    msg: string;
    response: User;
}

export interface PostResponse {
    err: number;
    msg: string;
    response: Post[];
    total: number;
    pageNumber: number;
    pageSize: number;
}

export interface PostIdResponse {
    err: number;
    msg: string;
    response: Post;
}

export interface LoginResponse {
    err: number;
    msg: string;
    token?: Nullable<string>;
    response: User;
}

export interface RegisterResponse {
    err: number;
    msg: string;
    token?: Nullable<string>;
}

export interface IQuery {
    area(): AreaResponse | Promise<AreaResponse>;
    attribute(): AttributeResponse | Promise<AttributeResponse>;
    category(): CategoryResponse | Promise<CategoryResponse>;
    image(): ImageResponse | Promise<ImageResponse>;
    province(): ProvinceResponse | Promise<ProvinceResponse>;
    price(): PriceResponse | Promise<PriceResponse>;
    user(): UserResponse | Promise<UserResponse>;
    userId(id: string): UserIdResponse | Promise<UserIdResponse>;
    post(input: InputPost): PostResponse | Promise<PostResponse>;
    postId(id: string): PostIdResponse | Promise<PostIdResponse>;
}

export interface IMutation {
    login(input: InputLogin): LoginResponse | Promise<LoginResponse>;
    register(input: InputRegister): RegisterResponse | Promise<RegisterResponse>;
}

export type DateTime = any;
type Nullable<T> = T | null;
