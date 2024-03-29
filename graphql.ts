
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
    title: string;
    start: string;
    address: string;
    categoryCode: string;
    provinceCode: string;
    priceNumber?: Nullable<number[]>;
    areaNumber?: Nullable<number[]>;
}

export interface InputNewPost {
    pageNumber: number;
    pageSize: number;
}

export interface InputUpdateProfile {
    name: string;
    avatar?: Nullable<string>;
    phone?: Nullable<string>;
    zalo?: Nullable<string>;
    file?: Nullable<string>;
}

export interface InputCreatePost {
    userid: string;
    address: string;
    areaCode: string;
    areaNumber: number;
    categoryCode: string;
    description: string;
    images: string[];
    label: string;
    type: string;
    priceCode: string;
    priceNumber: number;
    province: string;
    target: string;
    title: string;
    start: number;
}

export interface InputUpdatePost {
    address: string;
    title: string;
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

export interface Attribute {
    id: string;
    price: string;
    acreage: string;
    published: string;
    hashtag: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface Image {
    id: string;
    total: number;
    image: string;
    postImg?: Nullable<string>;
    createdAt: DateTime;
    updatedAt: DateTime;
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

export interface User {
    id: string;
    name: string;
    password: string;
    avatar?: Nullable<string>;
    phone?: Nullable<string>;
    zalo?: Nullable<string>;
    file?: Nullable<string>;
    post: Post[];
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

export interface PostResponse {
    err: number;
    msg: string;
    totalPage: number;
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

export interface CreatePostResponse {
    err: number;
    msg: string;
}

export interface UpdatePostResponse {
    err: number;
    msg: string;
    response: Post;
}

export interface DeletePostResponse {
    err: number;
    msg: string;
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

export interface NewPost {
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

export interface NewPostResponse {
    err: number;
    msg: string;
    response: NewPost[];
    total: number;
    pageNumber: number;
    pageSize: number;
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

export interface ImageResponse {
    err: number;
    msg: string;
    response: Image[];
}

export interface AttributeResponse {
    err: number;
    msg: string;
    response: Attribute[];
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

export interface UpdateProfileResponse {
    err: number;
    msg: string;
}

export interface IQuery {
    area(): AreaResponse | Promise<AreaResponse>;
    category(): CategoryResponse | Promise<CategoryResponse>;
    price(): PriceResponse | Promise<PriceResponse>;
    province(): ProvinceResponse | Promise<ProvinceResponse>;
    image(): ImageResponse | Promise<ImageResponse>;
    attribute(): AttributeResponse | Promise<AttributeResponse>;
    user(): UserResponse | Promise<UserResponse>;
    userId(userId: string): UserIdResponse | Promise<UserIdResponse>;
    post(input: InputPost): PostResponse | Promise<PostResponse>;
    postId(postId: string): PostIdResponse | Promise<PostIdResponse>;
    newPost(input: InputNewPost): NewPostResponse | Promise<NewPostResponse>;
}

export interface IMutation {
    updateProfile(userId: string, input: InputUpdateProfile): UpdateProfileResponse | Promise<UpdateProfileResponse>;
    createPost(input: InputCreatePost): CreatePostResponse | Promise<CreatePostResponse>;
    updatePost(postId: string, input: InputUpdatePost): UpdatePostResponse | Promise<UpdatePostResponse>;
    deletePost(postId: string): DeletePostResponse | Promise<DeletePostResponse>;
    login(input: InputLogin): LoginResponse | Promise<LoginResponse>;
    register(input: InputRegister): RegisterResponse | Promise<RegisterResponse>;
}

export type DateTime = any;
type Nullable<T> = T | null;
