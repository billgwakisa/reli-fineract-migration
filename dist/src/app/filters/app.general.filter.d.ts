import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost } from '@nestjs/core';
import { SentryService } from '@ntegral/nestjs-sentry';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { MessageService } from 'src/common/message/services/message.service';
export declare class AppGeneralFilter implements ExceptionFilter {
    private readonly sentryService;
    private readonly httpAdapterHost;
    private readonly messageService;
    private readonly configService;
    private readonly helperDateService;
    private readonly debug;
    private readonly logger;
    constructor(sentryService: SentryService, httpAdapterHost: HttpAdapterHost, messageService: MessageService, configService: ConfigService, helperDateService: HelperDateService);
    catch(exception: unknown, host: ArgumentsHost): Promise<void>;
    sendToSentry(exception: unknown): void;
}
