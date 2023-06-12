
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

export interface IQuery {
    area(): AreaResponse | Promise<AreaResponse>;
}

export type DateTime = any;
type Nullable<T> = T | null;
