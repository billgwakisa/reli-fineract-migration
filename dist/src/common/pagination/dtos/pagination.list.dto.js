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
exports.PaginationListDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const pagination_enum_constant_1 = require("../constants/pagination.enum.constant");
class PaginationListDto {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.PaginationListDto = PaginationListDto;
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Object)
], PaginationListDto.prototype, "_search", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Number)
], PaginationListDto.prototype, "_limit", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Number)
], PaginationListDto.prototype, "_offset", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Object)
], PaginationListDto.prototype, "_order", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Array)
], PaginationListDto.prototype, "_availableOrderBy", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Array)
], PaginationListDto.prototype, "_availableOrderDirection", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Number)
], PaginationListDto.prototype, "perPage", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Number)
], PaginationListDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", String)
], PaginationListDto.prototype, "orderBy", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", String)
], PaginationListDto.prototype, "orderDirection", void 0);
//# sourceMappingURL=pagination.list.dto.js.map