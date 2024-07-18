import { AwsS3Dto } from 'src/common/aws/dtos/aws.s3.dto';
import { AwsS3Schema } from 'src/common/aws/repository/entities/aws.s3.entity';
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import {
    DatabaseEntity,
    DatabaseProp,
    DatabaseSchema,
} from 'src/common/database/decorators/database.decorator';
import { IDatabaseDocument } from 'src/common/database/interfaces/database.interface';

export const LoanImportsTableName = 'LoanImports';

@DatabaseEntity({ collection: LoanImportsTableName })
export class LoanImportEntity extends DatabaseMongoUUIDEntityAbstract {
    @DatabaseProp()
    status: string;

    @DatabaseProp()
    resourceId: number;

    @DatabaseProp()
    response: string;

    @DatabaseProp()
    message: string;
}

export const LoanImportsSchema = DatabaseSchema(LoanImportEntity);
export type LoanImportsDoc = IDatabaseDocument<LoanImportEntity>;
