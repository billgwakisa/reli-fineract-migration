import { PipeTransform } from '@nestjs/common';
import { IFile } from 'src/common/file/interfaces/file.interface';
export declare class FileRequiredPipe implements PipeTransform {
    readonly field?: string;
    constructor(field?: string);
    transform(value: IFile | IFile[]): Promise<IFile | IFile[]>;
    validate(value: IFile | IFile[]): Promise<void>;
}
