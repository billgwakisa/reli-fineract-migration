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
exports.ResponsePagingDto = exports.ResponsePagingMetadataDto = exports.ResponsePagingMetadataPaginationDto = exports.ResponsePagingMetadataRequestDto = exports.ResponsePagingMetadataCursorDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const pagination_constant_1 = require("../../pagination/constants/pagination.constant");
const pagination_enum_constant_1 = require("../../pagination/constants/pagination.enum.constant");
const response_dto_1 = require("./response.dto");
class ResponsePagingMetadataCursorDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { nextPage: { required: true, type: () => String }, previousPage: { required: true, type: () => String }, firstPage: { required: true, type: () => String }, lastPage: { required: true, type: () => String } };
    }
}
exports.ResponsePagingMetadataCursorDto = ResponsePagingMetadataCursorDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], ResponsePagingMetadataCursorDto.prototype, "nextPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], ResponsePagingMetadataCursorDto.prototype, "previousPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], ResponsePagingMetadataCursorDto.prototype, "firstPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], ResponsePagingMetadataCursorDto.prototype, "lastPage", void 0);
class ResponsePagingMetadataRequestDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { search: { required: true, type: () => String }, filters: { required: true, type: () => Object }, page: { required: true, type: () => Number }, perPage: { required: true, type: () => Number }, orderBy: { required: true, type: () => String }, orderDirection: { required: true, enum: require("../../pagination/constants/pagination.enum.constant").ENUM_PAGINATION_ORDER_DIRECTION_TYPE }, availableSearch: { required: true, type: () => [String] }, availableOrderBy: { required: true, type: () => [String] }, availableOrderDirection: { required: true, enum: require("../../pagination/constants/pagination.enum.constant").ENUM_PAGINATION_ORDER_DIRECTION_TYPE, isArray: true } };
    }
}
exports.ResponsePagingMetadataRequestDto = ResponsePagingMetadataRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.person.fullName(),
    }),
    __metadata("design:type", String)
], ResponsePagingMetadataRequestDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: {},
    }),
    __metadata("design:type", Object)
], ResponsePagingMetadataRequestDto.prototype, "filters", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: 1,
    }),
    __metadata("design:type", Number)
], ResponsePagingMetadataRequestDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: 20,
    }),
    __metadata("design:type", Number)
], ResponsePagingMetadataRequestDto.prototype, "perPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: 'createdAt',
    }),
    __metadata("design:type", String)
], ResponsePagingMetadataRequestDto.prototype, "orderBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: pagination_enum_constant_1.ENUM_PAGINATION_ORDER_DIRECTION_TYPE.ASC,
    }),
    __metadata("design:type", String)
], ResponsePagingMetadataRequestDto.prototype, "orderDirection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: ['name'],
    }),
    __metadata("design:type", Array)
], ResponsePagingMetadataRequestDto.prototype, "availableSearch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: ['name', 'createdAt'],
    }),
    __metadata("design:type", Array)
], ResponsePagingMetadataRequestDto.prototype, "availableOrderBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: Object.values(pagination_enum_constant_1.ENUM_PAGINATION_ORDER_DIRECTION_TYPE),
    }),
    __metadata("design:type", Array)
], ResponsePagingMetadataRequestDto.prototype, "availableOrderDirection", void 0);
class ResponsePagingMetadataPaginationDto extends ResponsePagingMetadataRequestDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { total: { required: false, type: () => Number }, totalPage: { required: false, type: () => Number } };
    }
}
exports.ResponsePagingMetadataPaginationDto = ResponsePagingMetadataPaginationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
    }),
    __metadata("design:type", Number)
], ResponsePagingMetadataPaginationDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
    }),
    __metadata("design:type", Number)
], ResponsePagingMetadataPaginationDto.prototype, "totalPage", void 0);
class ResponsePagingMetadataDto extends response_dto_1.ResponseMetadataDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { cursor: { required: false, type: () => require("./response.paging.dto").ResponsePagingMetadataCursorDto }, pagination: { required: false, type: () => require("./response.paging.dto").ResponsePagingMetadataPaginationDto } };
    }
}
exports.ResponsePagingMetadataDto = ResponsePagingMetadataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => ResponsePagingMetadataCursorDto,
    }),
    __metadata("design:type", ResponsePagingMetadataCursorDto)
], ResponsePagingMetadataDto.prototype, "cursor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => ResponsePagingMetadataPaginationDto,
    }),
    __metadata("design:type", ResponsePagingMetadataPaginationDto)
], ResponsePagingMetadataDto.prototype, "pagination", void 0);
class ResponsePagingDto extends (0, swagger_1.PickType)(response_dto_1.ResponseDto, [
    'statusCode',
    'message',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { _metadata: { required: true, type: () => require("./response.paging.dto").ResponsePagingMetadataDto } };
    }
}
exports.ResponsePagingDto = ResponsePagingDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: '_metadata',
        required: true,
        nullable: false,
        description: 'Contain metadata about API',
        type: () => ResponsePagingMetadataDto,
        example: {
            language: 'en',
            timestamp: 1660190937231,
            timezone: 'Asia/Dubai',
            path: '/api/v1/test/hello',
            version: '1',
            repoVersion: '1.0.0',
            pagination: {
                search: faker_1.faker.person.fullName(),
                page: 1,
                perPage: 20,
                orderBy: 'createdAt',
                orderDirection: pagination_enum_constant_1.ENUM_PAGINATION_ORDER_DIRECTION_TYPE.ASC,
                availableSearch: ['name'],
                availableOrderBy: ['createdAt'],
                availableOrderDirection: pagination_constant_1.PAGINATION_DEFAULT_AVAILABLE_ORDER_DIRECTION,
                total: 100,
                totalPage: 5,
            },
            cursor: {
                nextPage: `http://217.0.0.1/__path?perPage=10&page=3&search=abc`,
                previousPage: `http://217.0.0.1/__path?perPage=10&page=1&search=abc`,
                firstPage: `http://217.0.0.1/__path?perPage=10&page=1&search=abc`,
                lastPage: `http://217.0.0.1/__path?perPage=10&page=20&search=abc`,
            },
        },
    }),
    __metadata("design:type", ResponsePagingMetadataDto)
], ResponsePagingDto.prototype, "_metadata", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Array)
], ResponsePagingDto.prototype, "data", void 0);
//# sourceMappingURL=response.paging.dto.js.map