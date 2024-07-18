import { HttpException } from '@nestjs/common';
import { ValidationError } from 'class-validator';
export declare class RequestValidationException extends HttpException {
    constructor(errors: ValidationError[]);
}
