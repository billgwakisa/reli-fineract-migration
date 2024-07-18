import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import {
    LoanImportEntity,
    LoanImportsSchema,
} from 'src/modules/loansimport/repository/entities/loanimport.entity';
import { LoanImportRepository } from 'src/modules/loansimport/repository/repositories/loanimport.repository';

@Module({
    providers: [LoanImportRepository],
    exports: [LoanImportRepository],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: LoanImportEntity.name,
                    schema: LoanImportsSchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class LoanImportRepositoryModule {}
