"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationException = void 0;
const common_1 = require("@nestjs/common");
const request_status_code_constant_1 = require("../constants/request.status-code.constant");
class RequestValidationException extends common_1.HttpException {
    constructor(errors) {
        super({
            statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.VALIDATION_ERROR,
            message: 'request.validation',
            errors,
        }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
    }
}
exports.RequestValidationException = RequestValidationException;
//# sourceMappingURL=request.validation.exception.js.map