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
exports.FileExcelValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const file_status_code_constant_1 = require("../constants/file.status-code.constant");
const file_import_exception_1 = require("../exceptions/file.import.exception");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let FileExcelValidationPipe = class FileExcelValidationPipe {
    constructor(dto) {
        this.dto = dto;
    }
    async transform(value) {
        if (!value) {
            return;
        }
        await this.validate(value);
        const dtos = await this.validateParse(value, this.dto);
        return dtos;
    }
    async validate(value) {
        if (!value || value.length === 0) {
            throw new common_1.UnprocessableEntityException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.REQUIRED_EXTRACT_FIRST_ERROR,
                message: 'file.error.requiredParseFirst',
            });
        }
        return;
    }
    async validateParse(value, classDtos) {
        const errors = [];
        const dtos = [];
        for (const [index, parse] of value.entries()) {
            const dto = (0, class_transformer_1.plainToInstance)(classDtos, parse.data);
            const validator = await (0, class_validator_1.validate)(dto);
            if (validator.length > 0) {
                errors.push({
                    row: index,
                    sheetName: parse.sheetName,
                    error: validator,
                });
            }
            else {
                dtos.push({
                    sheetName: parse.sheetName,
                    data: dto,
                });
            }
        }
        if (errors.length > 0) {
            throw new file_import_exception_1.FileImportException(errors);
        }
        return dtos;
    }
};
exports.FileExcelValidationPipe = FileExcelValidationPipe;
exports.FileExcelValidationPipe = FileExcelValidationPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], FileExcelValidationPipe);
//# sourceMappingURL=file.excel-validation.pipe.js.map