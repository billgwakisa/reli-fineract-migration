import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from 'src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import {
    LoanImportEntity,
    LoanImportsDoc,
} from 'src/modules/loansimport/repository/entities/loanimport.entity';

@Injectable()
export class LoanImportRepository extends DatabaseMongoUUIDRepositoryAbstract<
    LoanImportEntity,
    LoanImportsDoc
> {
    constructor(
        @DatabaseModel(LoanImportEntity.name)
        private readonly loanImportModel: Model<LoanImportEntity>
    ) {
        super(loanImportModel);
    }
}
