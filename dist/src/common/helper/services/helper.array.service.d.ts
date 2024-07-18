import { IHelperArrayService } from 'src/common/helper/interfaces/helper.array-service.interface';
export declare class HelperArrayService implements IHelperArrayService {
    getFromLeft<T>(array: T[], length: number): T[];
    getFromRight<T>(array: T[], length: number): T[];
    getDifference<T>(a: T[], b: T[]): T[];
    getIntersection<T>(a: T[], b: T[]): T[];
    concat<T>(a: T[], b: T[]): T[];
    concatUnique<T>(a: T[], b: T[]): T[];
    unique<T>(array: T[]): T[];
    shuffle<T>(array: T[]): T[];
    equals<T>(a: T[], b: T[]): boolean;
    notEquals<T>(a: T[], b: T[]): boolean;
    in<T>(a: T[], b: T[]): boolean;
    notIn<T>(a: T[], b: T[]): boolean;
    chunk<T>(a: T[], size: number): T[][];
}
