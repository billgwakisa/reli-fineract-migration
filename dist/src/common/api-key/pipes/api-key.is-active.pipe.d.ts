import { PipeTransform } from '@nestjs/common';
import { ApiKeyDoc } from 'src/common/api-key/repository/entities/api-key.entity';
export declare class ApiKeyActivePipe implements PipeTransform {
    transform(value: ApiKeyDoc): Promise<ApiKeyDoc>;
}
export declare class ApiKeyInactivePipe implements PipeTransform {
    transform(value: ApiKeyDoc): Promise<ApiKeyDoc>;
}
