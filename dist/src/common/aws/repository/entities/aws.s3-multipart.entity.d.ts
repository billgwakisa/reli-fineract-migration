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
import { AwsS3MultipartPartEntity } from 'src/common/aws/repository/entities/aws.s3-multipart-part.entity';
export declare class AwsS3MultipartEntity {
    uploadId: string;
    lastPartNumber: number;
    maxPartNumber: number;
    parts: AwsS3MultipartPartEntity[];
}
export declare const AwsS3MultipartSchema: import("mongoose").Schema<AwsS3MultipartEntity, import("mongoose").Model<AwsS3MultipartEntity, any, any, any, import("mongoose").Document<unknown, any, AwsS3MultipartEntity> & AwsS3MultipartEntity & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AwsS3MultipartEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<AwsS3MultipartEntity>> & import("mongoose").FlatRecord<AwsS3MultipartEntity> & {
    _id: import("mongoose").Types.ObjectId;
}>;
