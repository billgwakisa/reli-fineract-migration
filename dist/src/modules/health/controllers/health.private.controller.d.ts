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
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { DiskHealthIndicator, HealthCheckService, MemoryHealthIndicator, MongooseHealthIndicator } from '@nestjs/terminus';
import { Connection } from 'mongoose';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { HealthResponseDto } from 'src/modules/health/dtos/response/health.response.dto';
import { HealthAwsS3Indicator } from 'src/modules/health/indicators/health.aws-s3.indicator';
export declare class HealthPrivateController {
    private readonly databaseConnection;
    private readonly health;
    private readonly memoryHealthIndicator;
    private readonly diskHealthIndicator;
    private readonly mongooseIndicator;
    private readonly awsS3Indicator;
    constructor(databaseConnection: Connection, health: HealthCheckService, memoryHealthIndicator: MemoryHealthIndicator, diskHealthIndicator: DiskHealthIndicator, mongooseIndicator: MongooseHealthIndicator, awsS3Indicator: HealthAwsS3Indicator);
    checkAws(): Promise<IResponse<HealthResponseDto>>;
    checkDatabase(): Promise<IResponse<HealthResponseDto>>;
    checkMemoryHeap(): Promise<IResponse<HealthResponseDto>>;
    checkMemoryRss(): Promise<IResponse<HealthResponseDto>>;
    checkStorage(): Promise<IResponse<HealthResponseDto>>;
}
