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
exports.FileTypePipe = void 0;
const common_1 = require("@nestjs/common");
const file_status_code_constant_1 = require("../constants/file.status-code.constant");
let FileTypePipe = class FileTypePipe {
    constructor(type, field) {
        this.type = type;
        this.field = field;
    }
    async transform(value) {
        if (!value) {
            return value;
        }
        let fieldValue = value;
        if (this.field) {
            fieldValue = value[this.field];
        }
        if (!fieldValue ||
            Object.keys(fieldValue).length === 0 ||
            (Array.isArray(fieldValue) && fieldValue.length === 0)) {
            return value;
        }
        if (Array.isArray(fieldValue)) {
            for (const val of fieldValue) {
                await this.validate(val.mimetype);
            }
            return value;
        }
        const file = fieldValue;
        await this.validate(file.mimetype);
        return value;
    }
    async validate(mimetype) {
        if (!this.type.find(val => val === mimetype.toLowerCase())) {
            throw new common_1.UnsupportedMediaTypeException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.MIME_ERROR,
                message: 'file.error.mimeInvalid',
            });
        }
        return;
    }
};
exports.FileTypePipe = FileTypePipe;
exports.FileTypePipe = FileTypePipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Array, String])
], FileTypePipe);
//# sourceMappingURL=file.type.pipe.js.map