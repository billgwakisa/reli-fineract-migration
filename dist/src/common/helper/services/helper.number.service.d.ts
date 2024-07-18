import { IHelperNumberService } from 'src/common/helper/interfaces/helper.number-service.interface';
export declare class HelperNumberService implements IHelperNumberService {
    check(number: string): boolean;
    random(length: number): number;
    randomInRange(min: number, max: number): number;
    percent(value: number, total: number): number;
}
