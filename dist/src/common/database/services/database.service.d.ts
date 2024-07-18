import { MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { IDatabaseService } from 'src/common/database/interfaces/database.service.interface';
export declare class DatabaseService implements IDatabaseService {
    private readonly configService;
    constructor(configService: ConfigService);
    createOptions(): MongooseModuleOptions;
}
