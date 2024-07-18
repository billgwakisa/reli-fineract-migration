import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileImportException } from 'src/common/file/exceptions/file.import.exception';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { MessageService } from 'src/common/message/services/message.service';
export declare class AppValidationImportFilter implements ExceptionFilter {
    private readonly messageService;
    private readonly configService;
    private readonly helperDateService;
    private readonly debug;
    private readonly logger;
    constructor(messageService: MessageService, configService: ConfigService, helperDateService: HelperDateService);
    catch(exception: FileImportException, host: ArgumentsHost): Promise<void>;
}
