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
exports.UserLoginHistoryListResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const database_id_response_dto_1 = require("../../../../common/database/dtos/response/database.id.response.dto");
class UserLoginHistoryListResponseDto extends database_id_response_dto_1.DatabaseIdResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { user: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
}
exports.UserLoginHistoryListResponseDto = UserLoginHistoryListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: faker_1.faker.string.uuid(),
    }),
    __metadata("design:type", String)
], UserLoginHistoryListResponseDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date created at',
        example: faker_1.faker.date.recent(),
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Date)
], UserLoginHistoryListResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date updated at',
        example: faker_1.faker.date.recent(),
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Date)
], UserLoginHistoryListResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], UserLoginHistoryListResponseDto.prototype, "deletedAt", void 0);
//# sourceMappingURL=user-login-history.list.response.dto.js.map