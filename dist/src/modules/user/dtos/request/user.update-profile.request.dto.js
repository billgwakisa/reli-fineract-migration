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
exports.UserUpdateProfileRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const user_create_request_dto_1 = require("./user.create.request.dto");
class UserUpdateProfileRequestDto extends (0, swagger_1.PickType)(user_create_request_dto_1.UserCreateRequestDto, ['name', 'country']) {
    static _OPENAPI_METADATA_FACTORY() {
        return { familyName: { required: false, type: () => String, minLength: 1, maxLength: 50 }, address: { required: false, type: () => String } };
    }
}
exports.UserUpdateProfileRequestDto = UserUpdateProfileRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.person.lastName(),
        required: false,
        maxLength: 50,
        minLength: 1,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(50),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], UserUpdateProfileRequestDto.prototype, "familyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        maxLength: 200,
    }),
    __metadata("design:type", String)
], UserUpdateProfileRequestDto.prototype, "address", void 0);
//# sourceMappingURL=user.update-profile.request.dto.js.map