import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IAppException } from 'src/app/interfaces/app.interface';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { MessageService } from 'src/common/message/services/message.service';
export declare class AppHttpFilter implements ExceptionFilter {
    private readonly messageService;
    private readonly configService;
    private readonly helperDateService;
    private readonly debug;
    private readonly globalPrefix;
    private readonly docPrefix;
    private readonly logger;
    constructor(messageService: MessageService, configService: ConfigService, helperDateService: HelperDateService);
    catch(exception: HttpException, host: ArgumentsHost): Promise<void>;
    isErrorException(obj: any): obj is IAppException;
}
