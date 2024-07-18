import { PaginationListDto } from 'src/common/pagination/dtos/pagination.list.dto';
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { ApiKeyCreateRequestDto } from 'src/common/api-key/dtos/request/api-key.create.request.dto';
import { ApiKeyUpdateDateRequestDto } from 'src/common/api-key/dtos/request/api-key.update-date.request.dto';
import { ApiKeyUpdateRequestDto } from 'src/common/api-key/dtos/request/api-key.update.request.dto';
import { ApiKeyCreateResponseDto } from 'src/common/api-key/dtos/response/api-key.create.dto';
import { ApiKeyGetResponseDto } from 'src/common/api-key/dtos/response/api-key.get.response.dto';
import { ApiKeyListResponseDto } from 'src/common/api-key/dtos/response/api-key.list.response.dto';
import { ApiKeyResetResponseDto } from 'src/common/api-key/dtos/response/api-key.reset.dto';
import { ApiKeyDoc } from 'src/common/api-key/repository/entities/api-key.entity';
import { ApiKeyService } from 'src/common/api-key/services/api-key.service';
export declare class ApiKeyAdminController {
    private readonly apiKeyService;
    private readonly paginationService;
    constructor(apiKeyService: ApiKeyService, paginationService: PaginationService);
    list({ _search, _limit, _offset, _order }: PaginationListDto, isActive: Record<string, any>, type: Record<string, any>): Promise<IResponsePaging<ApiKeyListResponseDto>>;
    get(apiKey: ApiKeyDoc): Promise<IResponse<ApiKeyGetResponseDto>>;
    create(body: ApiKeyCreateRequestDto): Promise<IResponse<ApiKeyCreateResponseDto>>;
    reset(apiKey: ApiKeyDoc): Promise<IResponse<ApiKeyResetResponseDto>>;
    update(body: ApiKeyUpdateRequestDto, apiKey: ApiKeyDoc): Promise<IResponse<void>>;
    inactive(apiKey: ApiKeyDoc): Promise<void>;
    active(apiKey: ApiKeyDoc): Promise<void>;
    updateDate(body: ApiKeyUpdateDateRequestDto, apiKey: ApiKeyDoc): Promise<IResponse<void>>;
    delete(apiKey: ApiKeyDoc): Promise<void>;
}
