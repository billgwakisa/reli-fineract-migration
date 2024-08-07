import Strategy from 'passport-headerapikey';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { IRequestApp } from 'src/common/request/interfaces/request.interface';
import { ApiKeyEntity } from 'src/common/api-key/repository/entities/api-key.entity';
import { ApiKeyService } from 'src/common/api-key/services/api-key.service';
declare const ApiKeyXApiKeyStrategy_base: new (...args: any[]) => Strategy;
export declare class ApiKeyXApiKeyStrategy extends ApiKeyXApiKeyStrategy_base {
    private readonly apiKeyService;
    private readonly helperDateService;
    constructor(apiKeyService: ApiKeyService, helperDateService: HelperDateService);
    validate(xApiKey: string, verified: (error: Error, user?: ApiKeyEntity, info?: string | number) => Promise<void>, req: IRequestApp): Promise<void>;
}
export {};
