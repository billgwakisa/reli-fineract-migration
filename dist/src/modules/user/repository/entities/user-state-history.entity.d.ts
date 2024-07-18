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
import { ENUM_USER_HISTORY_STATE } from 'src/modules/user/constants/user-history.enum.constant';
export declare const UserStateHistoryTableName = "UserStateHistories";
export declare class UserStateHistoryEntity extends DatabaseMongoUUIDEntityAbstract {
    user: string;
    beforeState: ENUM_USER_HISTORY_STATE;
    afterState: ENUM_USER_HISTORY_STATE;
    by: string;
}
export declare const UserStateHistorySchema: import("mongoose").Schema<UserStateHistoryEntity, import("mongoose").Model<UserStateHistoryEntity, any, any, any, import("mongoose").Document<unknown, any, UserStateHistoryEntity> & UserStateHistoryEntity & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserStateHistoryEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserStateHistoryEntity>> & import("mongoose").FlatRecord<UserStateHistoryEntity> & Required<{
    _id: string;
}>>;
export type UserStateHistoryDoc = IDatabaseDocument<UserStateHistoryEntity>;
