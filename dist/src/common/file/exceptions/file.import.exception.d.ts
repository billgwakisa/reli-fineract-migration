import { HttpException } from '@nestjs/common';
import { IMessageValidationImportErrorParam } from 'src/common/message/interfaces/message.interface';
export declare class FileImportException extends HttpException {
    constructor(errors: IMessageValidationImportErrorParam[]);
}
