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
exports.UserSignUpRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const request_is_password_validation_1 = require("../../../../common/request/validations/request.is-password.validation");
const user_create_request_dto_1 = require("./user.create.request.dto");
class UserSignUpRequestDto extends (0, swagger_1.OmitType)(user_create_request_dto_1.UserCreateRequestDto, [
    'role',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { password: { required: true, type: () => String, minLength: 8, maxLength: 50 } };
    }
}
exports.UserSignUpRequestDto = UserSignUpRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'string password',
        example: `${faker_1.faker.string.alphanumeric(5).toLowerCase()}${faker_1.faker.string
            .alphanumeric(5)
            .toUpperCase()}@@!123`,
        required: true,
        maxLength: 50,
        minLength: 8,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, request_is_password_validation_1.IsPassword)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UserSignUpRequestDto.prototype, "password", void 0);
//# sourceMappingURL=user.sign-up.request.dto.js.map