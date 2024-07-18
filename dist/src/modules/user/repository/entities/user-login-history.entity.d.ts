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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { IDatabaseDocument } from 'src/common/database/interfaces/database.interface';
export declare const UserLoginHistoryTableName = "UserLoginHistories";
export declare class UserLoginHistoryEntity extends DatabaseMongoUUIDEntityAbstract {
    user: string;
    ip: string;
    hostname: string;
    protocol: string;
    originalUrl: string;
    method: string;
    userAgent?: string;
    xForwardedFor?: string;
    xForwardedHost?: string;
    xForwardedPorto?: string;
}
export declare const UserLoginHistorySchema: import("mongoose").Schema<UserLoginHistoryEntity, import("mongoose").Model<UserLoginHistoryEntity, any, any, any, import("mongoose").Document<unknown, any, UserLoginHistoryEntity> & UserLoginHistoryEntity & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserLoginHistoryEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserLoginHistoryEntity>> & import("mongoose").FlatRecord<UserLoginHistoryEntity> & Required<{
    _id: string;
}>>;
export type UserLoginHistoryDoc = IDatabaseDocument<UserLoginHistoryEntity>;
