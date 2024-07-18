"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsePaging = exports.ResponseFileExcel = exports.Response = void 0;
const common_1 = require("@nestjs/common");
const helper_enum_constant_1 = require("../../helper/constants/helper.enum.constant");
const response_constant_1 = require("../constants/response.constant");
const response_interceptor_1 = require("../interceptors/response.interceptor");
const response_file_interceptor_1 = require("../interceptors/response.file.interceptor");
const response_paging_interceptor_1 = require("../interceptors/response.paging.interceptor");
function Response(messagePath, options) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(response_interceptor_1.ResponseInterceptor), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_MESSAGE_PATH_META_KEY, messagePath), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_MESSAGE_PROPERTIES_META_KEY, options?.messageProperties));
}
exports.Response = Response;
function ResponseFileExcel(options) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(response_file_interceptor_1.ResponseFileExcelInterceptor), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_FILE_EXCEL_TYPE_META_KEY, options?.type ?? helper_enum_constant_1.ENUM_HELPER_FILE_EXCEL_TYPE.CSV), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_FILE_EXCEL_PASSWORD_META_KEY, options?.password));
}
exports.ResponseFileExcel = ResponseFileExcel;
function ResponsePaging(messagePath, options) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(response_paging_interceptor_1.ResponsePagingInterceptor), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_MESSAGE_PATH_META_KEY, messagePath), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_MESSAGE_PROPERTIES_META_KEY, options?.messageProperties));
}
exports.ResponsePaging = ResponsePaging;
//# sourceMappingURL=response.decorator.js.map