import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/common/auth/auth.module';
import { CountryModule } from 'src/modules/country/country.module';
import { EmailModule } from 'src/modules/email/email.module';
import { HelloPublicController } from 'src/modules/hello/controllers/hello.public.controller';
import { LoansimportPublicController } from 'src/modules/loansimport/controllers/loansimport.public.controller';
import { LoanImportRepositoryModule } from 'src/modules/loansimport/repository/loanimport.repository.module';
import { RoleModule } from 'src/modules/role/role.module';
import { SettingModule } from 'src/modules/setting/setting.module';
import { UserPublicController } from 'src/modules/user/controllers/user.public.controller';
import { UserModule } from 'src/modules/user/user.module';

@Module({
    controllers: [
        HelloPublicController,
        LoansimportPublicController,
        UserPublicController,
    ],
    providers: [],
    exports: [],
    imports: [
        SettingModule,
        UserModule,
        AuthModule,
        RoleModule,
        EmailModule,
        CountryModule,
        HttpModule,
        LoanImportRepositoryModule,
    ],
})
export class RoutesPublicModule {}
