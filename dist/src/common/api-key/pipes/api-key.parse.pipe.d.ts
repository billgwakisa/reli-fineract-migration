import { PipeTransform } from '@nestjs/common';
import { ApiKeyDoc } from 'src/common/api-key/repository/entities/api-key.entity';
import { ApiKeyService } from 'src/common/api-key/services/api-key.service';
export declare class ApiKeyParsePipe implements PipeTransform {
    private readonly apiKeyService;
    constructor(apiKeyService: ApiKeyService);
    transform(value: any): Promise<ApiKeyDoc>;
}
