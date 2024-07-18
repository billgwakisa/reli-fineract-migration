import { PipeTransform } from '@nestjs/common/interfaces';
import { IFile, IFileRows } from 'src/common/file/interfaces/file.interface';
import { FileService } from 'src/common/file/services/file.service';
export declare class FileExcelParsePipe<T> implements PipeTransform {
    private readonly fileService;
    constructor(fileService: FileService);
    transform(value: IFile): Promise<IFileRows<T>[]>;
    validate(value: IFile): Promise<void>;
    parse(value: IFile): IFileRows<T>[];
    parseCsv(value: IFile): IFileRows<T>[];
    parseExcel(value: IFile): IFileRows<T>[];
}
