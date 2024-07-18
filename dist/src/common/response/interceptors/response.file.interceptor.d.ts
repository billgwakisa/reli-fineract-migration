import { NestInterceptor, ExecutionContext, CallHandler, StreamableFile } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { FileService } from 'src/common/file/services/file.service';
export declare class ResponseFileExcelInterceptor implements NestInterceptor<Promise<any>> {
    private readonly reflector;
    private readonly fileService;
    private readonly helperDateService;
    constructor(reflector: Reflector, fileService: FileService, helperDateService: HelperDateService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<Promise<StreamableFile>>;
}
