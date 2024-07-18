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
import { AwsS3Entity } from 'src/common/aws/repository/entities/aws.s3.entity';
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { IDatabaseDocument } from 'src/common/database/interfaces/database.interface';
import { ENUM_USER_GENDER, ENUM_USER_SIGN_UP_FROM, ENUM_USER_STATUS } from 'src/modules/user/constants/user.enum.constant';
export declare const UserTableName = "Users";
export declare class UserMobileNumberEntity {
    country: string;
    number: string;
}
export declare const UserMobileNumberSchema: import("mongoose").Schema<UserMobileNumberEntity, import("mongoose").Model<UserMobileNumberEntity, any, any, any, import("mongoose").Document<unknown, any, UserMobileNumberEntity> & UserMobileNumberEntity & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserMobileNumberEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserMobileNumberEntity>> & import("mongoose").FlatRecord<UserMobileNumberEntity> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export type UserMobileNumberDoc = IDatabaseDocument<UserMobileNumberEntity>;
export declare class UserEntity extends DatabaseMongoUUIDEntityAbstract {
    name: string;
    familyName?: string;
    mobileNumber?: UserMobileNumberEntity;
    email: string;
    role: string;
    password: string;
    passwordExpired: Date;
    passwordCreated: Date;
    passwordAttempt: number;
    signUpDate: Date;
    signUpFrom: ENUM_USER_SIGN_UP_FROM;
    salt: string;
    status: ENUM_USER_STATUS;
    blocked: boolean;
    photo?: AwsS3Entity;
    address?: string;
    gender?: ENUM_USER_GENDER;
    selfDeletion?: boolean;
    country: string;
}
export declare const UserSchema: import("mongoose").Schema<UserEntity, import("mongoose").Model<UserEntity, any, any, any, import("mongoose").Document<unknown, any, UserEntity> & UserEntity & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserEntity>> & import("mongoose").FlatRecord<UserEntity> & Required<{
    _id: string;
}>>;
export type UserDoc = IDatabaseDocument<UserEntity>;
