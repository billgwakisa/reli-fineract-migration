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
import { Type } from '@nestjs/common';
import { PropOptions, SchemaOptions } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { IDatabaseQueryContainOptions } from 'src/common/database/interfaces/database.interface';
export declare function DatabaseConnection(connectionName?: string): ParameterDecorator;
export declare function DatabaseModel(entity: any, connectionName?: string): ParameterDecorator;
export declare function DatabaseEntity(options?: SchemaOptions): ClassDecorator;
export declare function DatabaseProp(options?: PropOptions<any>): PropertyDecorator;
export declare function DatabaseSchema<T = any, N = MongooseSchema<T>>(entity: Type<T>): N;
export declare function DatabaseQueryIn<T = string>(field: string, values: T[]): Record<string, any>;
export declare function DatabaseQueryNin<T = string>(field: string, values: T[]): Record<string, any>;
export declare function DatabaseQueryEqual<T = string>(field: string, value: T): Record<string, any>;
export declare function DatabaseQueryNotEqual<T = string>(field: string, value: T): Record<string, any>;
export declare function DatabaseQueryContain(field: string, value: string, options?: IDatabaseQueryContainOptions): {
    [x: string]: {
        $regex: RegExp;
        $options: string;
    };
};
export declare function DatabaseQueryOr(queries: Record<string, any>[]): {
    $or: Record<string, any>[];
};
export declare function DatabaseQueryAnd(queries: Record<string, any>[]): {
    $and: Record<string, any>[];
};
