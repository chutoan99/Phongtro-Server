/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Area {
  id?: Nullable<string>;
  order?: Nullable<number>;
  code?: Nullable<string>;
  value?: Nullable<string>;
}

export class AreaResponse {
  err: number;
  msg: string;
  response?: Nullable<Nullable<Area>[]>;
}

export abstract class IQuery {
  abstract area(): AreaResponse | Promise<AreaResponse>;
}

type Nullable<T> = T | null;
