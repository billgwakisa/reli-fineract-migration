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
exports.RoleCreateRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const role_update_request_dto_1 = require("./role.update.request.dto");
class RoleCreateRequestDto extends (0, swagger_1.IntersectionType)((0, swagger_1.OmitType)(role_update_request_dto_1.RoleUpdateRequestDto, ['description']), (0, swagger_1.PickType)(role_update_request_dto_1.RoleUpdateRequestDto, ['description'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, minLength: 3, maxLength: 30 } };
    }
}
exports.RoleCreateRequestDto = RoleCreateRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of role',
        example: faker_1.faker.person.jobTitle(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(30),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], RoleCreateRequestDto.prototype, "name", void 0);
//# sourceMappingURL=role.create.request.dto.js.map