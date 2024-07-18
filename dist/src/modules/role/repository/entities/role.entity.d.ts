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
import { ENUM_POLICY_ROLE_TYPE } from 'src/common/policy/constants/policy.enum.constant';
import { RolePermissionEntity } from 'src/modules/role/repository/entities/role.permission.entity';
export declare const RoleTableName = "Roles";
export declare class RoleEntity extends DatabaseMongoUUIDEntityAbstract {
    name: string;
    description?: string;
    isActive: boolean;
    type: ENUM_POLICY_ROLE_TYPE;
    permissions: RolePermissionEntity[];
}
export declare const RoleSchema: import("mongoose").Schema<RoleEntity, import("mongoose").Model<RoleEntity, any, any, any, import("mongoose").Document<unknown, any, RoleEntity> & RoleEntity & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RoleEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<RoleEntity>> & import("mongoose").FlatRecord<RoleEntity> & Required<{
    _id: string;
}>>;
export type RoleDoc = IDatabaseDocument<RoleEntity>;
