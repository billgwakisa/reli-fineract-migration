import { PipeTransform } from '@nestjs/common';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { ApiKeyDoc } from 'src/common/api-key/repository/entities/api-key.entity';
export declare class ApiKeyNotExpiredPipe implements PipeTransform {
    private readonly helperDateService;
    constructor(helperDateService: HelperDateService);
    transform(value: ApiKeyDoc): Promise<ApiKeyDoc>;
}
