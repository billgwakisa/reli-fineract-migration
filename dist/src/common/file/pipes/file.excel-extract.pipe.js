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
exports.FileExcelParsePipe = void 0;
const common_1 = require("@nestjs/common");
const file_enum_constant_1 = require("../constants/file.enum.constant");
const file_status_code_constant_1 = require("../constants/file.status-code.constant");
const file_service_1 = require("../services/file.service");
let FileExcelParsePipe = class FileExcelParsePipe {
    constructor(fileService) {
        this.fileService = fileService;
    }
    async transform(value) {
        if (!value) {
            return;
        }
        await this.validate(value);
        const parse = this.parse(value);
        return parse;
    }
    async validate(value) {
        const mimetype = value.mimetype.toLowerCase();
        const supportedFiles = Object.values(file_enum_constant_1.ENUM_FILE_MIME_EXCEL);
        if (!supportedFiles.includes(mimetype)) {
            throw new common_1.UnsupportedMediaTypeException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.MIME_ERROR,
                message: 'file.error.mimeInvalid',
            });
        }
    }
    parse(value) {
        if (value.mimetype === file_enum_constant_1.ENUM_FILE_MIME.CSV) {
            return this.parseCsv(value);
        }
        return this.parseExcel(value);
    }
    parseCsv(value) {
        const parse = this.fileService.readCsv(value.buffer);
        return [parse];
    }
    parseExcel(value) {
        const parse = this.fileService.readExcel(value.buffer);
        return parse;
    }
};
exports.FileExcelParsePipe = FileExcelParsePipe;
exports.FileExcelParsePipe = FileExcelParsePipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [file_service_1.FileService])
], FileExcelParsePipe);
//# sourceMappingURL=file.excel-extract.pipe.js.map