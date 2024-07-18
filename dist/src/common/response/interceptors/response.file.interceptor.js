"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseFileExcelInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const core_1 = require("@nestjs/core");
const response_constant_1 = require("../constants/response.constant");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
const helper_enum_constant_1 = require("../../helper/constants/helper.enum.constant");
const file_enum_constant_1 = require("../../file/constants/file.enum.constant");
const file_service_1 = require("../../file/services/file.service");
let ResponseFileExcelInterceptor = class ResponseFileExcelInterceptor {
    constructor(reflector, fileService, helperDateService) {
        this.reflector = reflector;
        this.fileService = fileService;
        this.helperDateService = helperDateService;
    }
    intercept(context, next) {
        if (context.getType() === 'http') {
            return next.handle().pipe((0, operators_1.map)(async (res) => {
                const ctx = context.switchToHttp();
                const response = ctx.getResponse();
                const type = this.reflector.get(response_constant_1.RESPONSE_FILE_EXCEL_TYPE_META_KEY, context.getHandler());
                const password = this.reflector.get(response_constant_1.RESPONSE_FILE_EXCEL_PASSWORD_META_KEY, context.getHandler());
                const responseData = (await res);
                if (!responseData) {
                    throw new Error('ResponseFileExcel must instanceof IResponseFileExcel');
                }
                else if (!responseData.data ||
                    !Array.isArray(responseData.data)) {
                    throw new Error('Field data must in array');
                }
                if (type === helper_enum_constant_1.ENUM_HELPER_FILE_EXCEL_TYPE.XLSX) {
                    const file = this.fileService.writeExcel(responseData.data, {
                        password,
                    });
                    const timestamp = this.helperDateService.createTimestamp();
                    response
                        .setHeader('Content-Type', file_enum_constant_1.ENUM_FILE_MIME.XLSX)
                        .setHeader('Content-Disposition', `attachment; filename=export-${timestamp}.${type.toLowerCase()}`)
                        .setHeader('Content-Length', file.length);
                    return new common_1.StreamableFile(file);
                }
                const file = this.fileService.writeCsv(responseData.data[0]);
                const timestamp = this.helperDateService.createTimestamp();
                response
                    .setHeader('Content-Type', file_enum_constant_1.ENUM_FILE_MIME.CSV)
                    .setHeader('Content-Disposition', `attachment; filename=export-${timestamp}.${type.toLowerCase()}`)
                    .setHeader('Content-Length', file.length);
                return new common_1.StreamableFile(file);
            }));
        }
        return next.handle();
    }
};
exports.ResponseFileExcelInterceptor = ResponseFileExcelInterceptor;
exports.ResponseFileExcelInterceptor = ResponseFileExcelInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        file_service_1.FileService,
        helper_date_service_1.HelperDateService])
], ResponseFileExcelInterceptor);
//# sourceMappingURL=response.file.interceptor.js.map