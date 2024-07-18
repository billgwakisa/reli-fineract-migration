import { PaginationListDto } from 'src/common/pagination/dtos/pagination.list.dto';
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { CountryGetResponseDto } from 'src/modules/country/dtos/response/country.get.response.dto';
import { CountryListResponseDto } from 'src/modules/country/dtos/response/country.list.response.dto';
import { CountryDoc } from 'src/modules/country/repository/entities/country.entity';
import { CountryService } from 'src/modules/country/services/country.service';
export declare class CountryAdminController {
    private readonly countryService;
    private readonly paginationService;
    constructor(countryService: CountryService, paginationService: PaginationService);
    list({ _search, _limit, _offset, _order }: PaginationListDto, isActive: Record<string, any>): Promise<IResponsePaging<CountryListResponseDto>>;
    get(country: CountryDoc): Promise<IResponse<CountryGetResponseDto>>;
    inactive(country: CountryDoc): Promise<void>;
    active(country: CountryDoc): Promise<void>;
}
