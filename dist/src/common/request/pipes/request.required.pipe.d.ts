import { PipeTransform } from '@nestjs/common';
export declare class RequestRequiredPipe implements PipeTransform {
    transform(value: string): Promise<string>;
}
