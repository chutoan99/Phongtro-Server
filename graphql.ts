
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

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

export interface IQuery {
    area(): AreaResponse | Promise<AreaResponse>;
    attribute(): AttributeResponse | Promise<AttributeResponse>;
    category(): CategoryResponse | Promise<CategoryResponse>;
}

export type DateTime = any;
type Nullable<T> = T | null;
