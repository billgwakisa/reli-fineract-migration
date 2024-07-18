import { MessageService } from 'src/common/message/services/message.service';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { SettingCoreResponseDto } from 'src/modules/setting/dtos/response/setting.core.response.dto';
import { SettingService } from 'src/modules/setting/services/setting.service';
export declare class SettingPrivateController {
    private readonly messageService;
    private readonly settingService;
    constructor(messageService: MessageService, settingService: SettingService);
    getUserMaxCertificate(): Promise<IResponse<SettingCoreResponseDto>>;
}
