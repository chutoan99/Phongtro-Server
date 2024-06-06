
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

export interface Area {
    id: number;
    order: number;
    code: string;
    value: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface AreaSchema {
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

export interface CategorySchema {
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

export interface PriceSchema {
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

export interface ProvinceSchema {
    err: number;
    msg: string;
    response: Province[];
}

export interface Image {
    id: string;
    total: number;
    image: string;
    postImg?: Nullable<string>;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface ImageSchema {
    err: number;
    msg: string;
    response: Image[];
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

export interface AttributeSchema {
    err: number;
    msg: string;
    response: Attribute[];
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

export interface UserSchema {
    err: number;
    msg: string;
    response: User[];
}

export interface UserIdSchema {
    err: number;
    msg: string;
    response: User;
}

export interface UpdateUserSchema {
    err: number;
    msg: string;
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

export interface NewPostSchema {
    err: number;
    msg: string;
    response: NewPost[];
    total: number;
    pageNumber: number;
    pageSize: number;
}

export interface LoginSchema {
    err: number;
    msg: string;
    token?: Nullable<string>;
    response: User;
}

export interface RegisterSchema {
    err: number;
    msg: string;
    token?: Nullable<string>;
}

export interface IQuery {
    area(): AreaSchema | Promise<AreaSchema>;
    category(): CategorySchema | Promise<CategorySchema>;
    price(): PriceSchema | Promise<PriceSchema>;
    province(): ProvinceSchema | Promise<ProvinceSchema>;
    image(): ImageSchema | Promise<ImageSchema>;
    attribute(): AttributeSchema | Promise<AttributeSchema>;
    user(): UserSchema | Promise<UserSchema>;
    userId(userId: string): UserIdSchema | Promise<UserIdSchema>;
    post(input: InputPost): PostResponse | Promise<PostResponse>;
    postId(postId: string): PostIdResponse | Promise<PostIdResponse>;
    newPost(input: InputNewPost): NewPostSchema | Promise<NewPostSchema>;
}

export interface IMutation {
    updateProfile(userId: string, input: InputUpdateProfile): UpdateUserSchema | Promise<UpdateUserSchema>;
    createPost(input: InputCreatePost): CreatePostResponse | Promise<CreatePostResponse>;
    updatePost(postId: string, input: InputUpdatePost): UpdatePostResponse | Promise<UpdatePostResponse>;
    deletePost(postId: string): DeletePostResponse | Promise<DeletePostResponse>;
    login(input: InputLogin): LoginSchema | Promise<LoginSchema>;
    register(input: InputRegister): RegisterSchema | Promise<RegisterSchema>;
}

export type DateTime = any;
type Nullable<T> = T | null;
