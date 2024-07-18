import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class LessThanEqualOtherPropertyConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function LessThanEqualOtherProperty(property: string, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
export declare class LessThanOtherPropertyConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function LessThanOtherProperty(property: string, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
