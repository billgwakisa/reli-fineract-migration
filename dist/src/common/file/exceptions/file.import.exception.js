"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileImportException = void 0;
const common_1 = require("@nestjs/common");
const file_status_code_constant_1 = require("../constants/file.status-code.constant");
class FileImportException extends common_1.HttpException {
    constructor(errors) {
        super({
            statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.VALIDATION_DTO_ERROR,
            message: 'file.error.validationDto',
            errors,
        }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
    }
}
exports.FileImportException = FileImportException;
//# sourceMappingURL=file.import.exception.js.map