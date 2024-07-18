import { PaginationListDto } from 'src/common/pagination/dtos/pagination.list.dto';
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { CountryListResponseDto } from 'src/modules/country/dtos/response/country.list.response.dto';
import { CountryService } from 'src/modules/country/services/country.service';
export declare class CountryPrivateController {
    private readonly countryService;
    private readonly paginationService;
    constructor(countryService: CountryService, paginationService: PaginationService);
    list({ _search, _limit, _offset, _order }: PaginationListDto): Promise<IResponsePaging<CountryListResponseDto>>;
}
