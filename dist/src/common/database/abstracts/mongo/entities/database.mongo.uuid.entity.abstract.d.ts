import { DatabaseEntityAbstract } from 'src/common/database/abstracts/base/database.entity.abstract';
import { DATABASE_CREATED_AT_FIELD_NAME, DATABASE_DELETED_AT_FIELD_NAME, DATABASE_UPDATED_AT_FIELD_NAME } from 'src/common/database/constants/database.constant';
export declare abstract class DatabaseMongoUUIDEntityAbstract extends DatabaseEntityAbstract<string> {
    _id: string;
    [DATABASE_DELETED_AT_FIELD_NAME]?: Date;
    [DATABASE_CREATED_AT_FIELD_NAME]?: Date;
    [DATABASE_UPDATED_AT_FIELD_NAME]?: Date;
}
