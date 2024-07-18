/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Document } from 'mongoose';
import { IPaginationOrder } from 'src/common/pagination/interfaces/pagination.interface';
export interface IDatabaseQueryContainOptions {
    fullWord: boolean;
}
export interface IDatabaseJoin {
    field: string;
    localKey: string;
    foreignKey: string;
    model: any;
    condition?: Record<string, any>;
    justOne?: boolean;
    join?: this | this[];
}
export type IDatabaseDocument<T> = T & Document;
export interface IDatabaseFindOneOptions<T = any> {
    select?: Record<string, boolean | number> | string;
    join?: boolean | IDatabaseJoin | IDatabaseJoin[];
    session?: T;
    withDeleted?: boolean;
}
export type IDatabaseFindOneLockOptions<T = any> = IDatabaseFindOneOptions<T>;
export type IDatabaseGetTotalOptions<T = any> = Pick<IDatabaseFindOneOptions<T>, 'session' | 'withDeleted' | 'join'>;
export type IDatabaseSaveOptions<T = any> = Pick<IDatabaseFindOneOptions<T>, 'session'>;
export interface IDatabaseFindAllPaginationPagingOptions {
    limit: number;
    offset: number;
}
export interface IDatabaseFindAllPaginationOptions {
    paging?: IDatabaseFindAllPaginationPagingOptions;
    order?: IPaginationOrder;
}
export interface IDatabaseFindAllOptions<T = any> extends IDatabaseFindAllPaginationOptions, IDatabaseFindOneOptions<T> {
}
export interface IDatabaseCreateOptions<T = any> extends Pick<IDatabaseFindOneOptions<T>, 'session'> {
    _id?: string;
}
export interface IDatabaseExistOptions<T = any> extends Pick<IDatabaseFindOneOptions<T>, 'session' | 'withDeleted' | 'join'> {
    excludeId?: string[];
}
export type IDatabaseManyOptions<T = any> = Pick<IDatabaseFindOneOptions<T>, 'session' | 'join'>;
export type IDatabaseCreateManyOptions<T = any> = Pick<IDatabaseFindOneOptions<T>, 'session'>;
export type IDatabaseSoftDeleteManyOptions<T = any> = IDatabaseManyOptions<T>;
export type IDatabaseRestoreManyOptions<T = any> = IDatabaseManyOptions<T>;
export type IDatabaseRawOptions<T = any> = Pick<IDatabaseFindOneOptions<T>, 'session' | 'withDeleted'>;
export type IDatabaseRawFindAllOptions<T = any> = Pick<IDatabaseFindAllOptions<T>, 'order' | 'paging' | 'session' | 'withDeleted'>;
export type IDatabaseRawGetTotalOptions<T = any> = Pick<IDatabaseRawFindAllOptions<T>, 'session' | 'withDeleted'>;
