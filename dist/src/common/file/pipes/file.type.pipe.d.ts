import { PipeTransform } from '@nestjs/common';
import { ENUM_FILE_MIME } from 'src/common/file/constants/file.enum.constant';
import { IFile } from 'src/common/file/interfaces/file.interface';
export declare class FileTypePipe implements PipeTransform {
    readonly type: ENUM_FILE_MIME[];
    readonly field?: string;
    constructor(type: ENUM_FILE_MIME[], field?: string);
    transform(value: any): Promise<IFile | IFile[]>;
    validate(mimetype: string): Promise<void>;
}
