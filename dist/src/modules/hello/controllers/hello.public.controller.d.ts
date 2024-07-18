import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { HelloResponseDto } from 'src/modules/hello/dtos/response/hello.response.dto';
export declare class HelloPublicController {
    private readonly helperDateService;
    constructor(helperDateService: HelperDateService);
    hello(): Promise<IResponse<HelloResponseDto>>;
}
