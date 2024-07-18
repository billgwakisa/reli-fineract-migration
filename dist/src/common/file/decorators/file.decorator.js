"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilePartNumber = exports.FileUploadMultipleFields = exports.FileUploadMultiple = exports.FileUploadSingle = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const file_constant_1 = require("../constants/file.constant");
function FileUploadSingle(options) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)(options?.field ?? 'file', {
        limits: {
            fileSize: options?.fileSize ?? file_constant_1.FILE_SIZE_IN_BYTES,
            files: 1,
        },
    })));
}
exports.FileUploadSingle = FileUploadSingle;
function FileUploadMultiple(options) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)(options?.field ?? 'files', options?.maxFiles ?? 2, {
        limits: {
            fileSize: options?.fileSize ?? file_constant_1.FILE_SIZE_IN_BYTES,
        },
    })));
}
exports.FileUploadMultiple = FileUploadMultiple;
function FileUploadMultipleFields(fields, options) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)(fields.map(e => ({
        name: e.field,
        maxCount: e.maxFiles,
    })), {
        limits: {
            fileSize: options?.fileSize ?? file_constant_1.FILE_SIZE_IN_BYTES,
        },
    })));
}
exports.FileUploadMultipleFields = FileUploadMultipleFields;
exports.FilePartNumber = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const { headers } = request;
    return Number(headers['x-part-number']) ?? 0;
});
//# sourceMappingURL=file.decorator.js.map