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
exports.RoleListResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const role_get_response_dto_1 = require("./role.get.response.dto");
class RoleListResponseDto extends (0, swagger_1.OmitType)(role_get_response_dto_1.RoleGetResponseDto, [
    'permissions',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { permissions: { required: true, type: () => Number } };
    }
}
exports.RoleListResponseDto = RoleListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'count of permissions',
        required: true,
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.length),
    __metadata("design:type", Number)
], RoleListResponseDto.prototype, "permissions", void 0);
//# sourceMappingURL=role.list.response.dto.js.map