import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { MessageService } from 'src/common/message/services/message.service';
import { RequestValidationException } from 'src/common/request/exceptions/request.validation.exception';
export declare class AppValidationFilter implements ExceptionFilter {
    private readonly messageService;
    private readonly configService;
    private readonly helperDateService;
    private readonly debug;
    private readonly logger;
    constructor(messageService: MessageService, configService: ConfigService, helperDateService: HelperDateService);
    catch(exception: RequestValidationException, host: ArgumentsHost): Promise<void>;
}
