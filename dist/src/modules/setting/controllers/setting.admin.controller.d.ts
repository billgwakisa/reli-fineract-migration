import { DatabaseIdResponseDto } from 'src/common/database/dtos/response/database.id.response.dto';
import { PaginationListDto } from 'src/common/pagination/dtos/pagination.list.dto';
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { SettingUpdateRequestDto } from 'src/modules/setting/dtos/request/setting.update.request.dto';
import { SettingGetResponseDto } from 'src/modules/setting/dtos/response/setting.get.response.dto';
import { SettingListResponseDto } from 'src/modules/setting/dtos/response/setting.list.response.dto';
import { SettingDoc } from 'src/modules/setting/repository/entities/setting.entity';
import { SettingService } from 'src/modules/setting/services/setting.service';
export declare class SettingAdminController {
    private readonly settingService;
    private readonly paginationService;
    constructor(settingService: SettingService, paginationService: PaginationService);
    list({ _search, _limit, _offset, _order }: PaginationListDto): Promise<IResponsePaging<SettingListResponseDto>>;
    get(setting: SettingDoc): Promise<IResponse<SettingGetResponseDto>>;
    update(setting: SettingDoc, body: SettingUpdateRequestDto): Promise<IResponse<DatabaseIdResponseDto>>;
}
