import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class DateGreaterThanEqualConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function DateGreaterThanEqual(date: Date, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
export declare class DateGreaterThanConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function DateGreaterThan(date: Date, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
