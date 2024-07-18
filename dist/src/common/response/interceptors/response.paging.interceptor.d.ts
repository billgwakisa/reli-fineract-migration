import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MessageService } from 'src/common/message/services/message.service';
import { Reflector } from '@nestjs/core';
import { HelperArrayService } from 'src/common/helper/services/helper.array.service';
import { ResponsePagingDto } from 'src/common/response/dtos/response.paging.dto';
import { ConfigService } from '@nestjs/config';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
export declare class ResponsePagingInterceptor implements NestInterceptor<Promise<ResponsePagingDto>> {
    private readonly reflector;
    private readonly messageService;
    private readonly helperArrayService;
    private readonly configService;
    private readonly helperDateService;
    constructor(reflector: Reflector, messageService: MessageService, helperArrayService: HelperArrayService, configService: ConfigService, helperDateService: HelperDateService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<Promise<ResponsePagingDto>>;
}
