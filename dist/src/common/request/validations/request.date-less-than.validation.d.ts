import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class DateLessThanEqualConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function DateLessThanEqual(date: Date, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
export declare class DateLessThanConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function DateLessThan(date: Date, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
