import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MessageService } from 'src/common/message/services/message.service';
import { Reflector } from '@nestjs/core';
import { ResponseDto } from 'src/common/response/dtos/response.dto';
import { ConfigService } from '@nestjs/config';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
export declare class ResponseInterceptor implements NestInterceptor<Promise<ResponseDto>> {
    private readonly reflector;
    private readonly messageService;
    private readonly configService;
    private readonly helperDateService;
    constructor(reflector: Reflector, messageService: MessageService, configService: ConfigService, helperDateService: HelperDateService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<Promise<ResponseDto>>;
}
