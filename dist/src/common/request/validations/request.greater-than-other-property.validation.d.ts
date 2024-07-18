import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class GreaterThanEqualOtherPropertyConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function GreaterThanEqualOtherProperty(property: string, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
export declare class GreaterThanOtherPropertyConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function GreaterThanOtherProperty(property: string, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
