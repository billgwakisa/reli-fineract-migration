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
exports.EmailSendTempPasswordDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
class EmailSendTempPasswordDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { password: { required: true, type: () => String }, expiredAt: { required: true, type: () => Date } };
    }
}
exports.EmailSendTempPasswordDto = EmailSendTempPasswordDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: faker_1.faker.string.alphanumeric(10),
        description: 'Expired at by date',
    }),
    __metadata("design:type", String)
], EmailSendTempPasswordDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: faker_1.faker.date.future(),
        type: 'date',
        description: 'Expired at by date',
    }),
    __metadata("design:type", Date)
], EmailSendTempPasswordDto.prototype, "expiredAt", void 0);
//# sourceMappingURL=email.send-temp-password.dto.js.map