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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyAdminController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_decorator_1 = require("../../pagination/decorators/pagination.decorator");
const pagination_list_dto_1 = require("../../pagination/dtos/pagination.list.dto");
const pagination_service_1 = require("../../pagination/services/pagination.service");
const request_required_pipe_1 = require("../../request/pipes/request.required.pipe");
const response_decorator_1 = require("../../response/decorators/response.decorator");
const api_key_enum_constant_1 = require("../constants/api-key.enum.constant");
const api_key_list_constant_1 = require("../constants/api-key.list.constant");
const api_key_decorator_1 = require("../decorators/api-key.decorator");
const api_key_admin_doc_1 = require("../docs/api-key.admin.doc");
const api_key_create_request_dto_1 = require("../dtos/request/api-key.create.request.dto");
const api_key_update_date_request_dto_1 = require("../dtos/request/api-key.update-date.request.dto");
const api_key_update_request_dto_1 = require("../dtos/request/api-key.update.request.dto");
const api_key_is_active_pipe_1 = require("../pipes/api-key.is-active.pipe");
const api_key_parse_pipe_1 = require("../pipes/api-key.parse.pipe");
const api_key_service_1 = require("../services/api-key.service");
const auth_jwt_decorator_1 = require("../../auth/decorators/auth.jwt.decorator");
const policy_enum_constant_1 = require("../../policy/constants/policy.enum.constant");
const policy_decorator_1 = require("../../policy/decorators/policy.decorator");
const api_key_expired_pipe_1 = require("../pipes/api-key.expired.pipe");
let ApiKeyAdminController = class ApiKeyAdminController {
    constructor(apiKeyService, paginationService) {
        this.apiKeyService = apiKeyService;
        this.paginationService = paginationService;
    }
    async list({ _search, _limit, _offset, _order }, isActive, type) {
        const find = {
            ..._search,
            ...isActive,
            ...type,
        };
        const apiKeys = await this.apiKeyService.findAll(find, {
            paging: {
                limit: _limit,
                offset: _offset,
            },
            order: _order,
        });
        const total = await this.apiKeyService.getTotal(find);
        const totalPage = this.paginationService.totalPage(total, _limit);
        const mapped = await this.apiKeyService.mapList(apiKeys);
        return {
            _pagination: { totalPage, total },
            data: mapped,
        };
    }
    async get(apiKey) {
        const mapped = await this.apiKeyService.mapGet(apiKey);
        return { data: mapped };
    }
    async create(body) {
        const created = await this.apiKeyService.create(body);
        return {
            data: created,
        };
    }
    async reset(apiKey) {
        const updated = await this.apiKeyService.reset(apiKey);
        return {
            data: updated,
        };
    }
    async update(body, apiKey) {
        await this.apiKeyService.update(apiKey, body);
        return;
    }
    async inactive(apiKey) {
        await this.apiKeyService.inactive(apiKey);
        return;
    }
    async active(apiKey) {
        await this.apiKeyService.active(apiKey);
        return;
    }
    async updateDate(body, apiKey) {
        await this.apiKeyService.updateDate(apiKey, body);
        return;
    }
    async delete(apiKey) {
        await this.apiKeyService.delete(apiKey);
        return;
    }
};
exports.ApiKeyAdminController = ApiKeyAdminController;
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminListDoc)(),
    (0, response_decorator_1.ResponsePaging)('apiKey.list'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, pagination_decorator_1.PaginationQuery)({
        availableSearch: api_key_list_constant_1.API_KEY_DEFAULT_AVAILABLE_SEARCH,
    })),
    __param(1, (0, pagination_decorator_1.PaginationQueryFilterInBoolean)('isActive', api_key_list_constant_1.API_KEY_DEFAULT_IS_ACTIVE)),
    __param(2, (0, pagination_decorator_1.PaginationQueryFilterInEnum)('type', api_key_list_constant_1.API_KEY_DEFAULT_TYPE, api_key_enum_constant_1.ENUM_API_KEY_TYPE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_list_dto_1.PaginationListDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "list", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminGetDoc)(),
    (0, response_decorator_1.Response)('apiKey.get'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Get)('/get/:apiKey'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('apiKey', request_required_pipe_1.RequestRequiredPipe, api_key_parse_pipe_1.ApiKeyParsePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "get", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminCreateDoc)(),
    (0, response_decorator_1.Response)('apiKey.create'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.CREATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Post)('/create'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [api_key_create_request_dto_1.ApiKeyCreateRequestDto]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "create", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminResetDoc)(),
    (0, response_decorator_1.Response)('apiKey.reset'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Patch)('/update/:apiKey/reset'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('apiKey', request_required_pipe_1.RequestRequiredPipe, api_key_parse_pipe_1.ApiKeyParsePipe, api_key_is_active_pipe_1.ApiKeyActivePipe, api_key_expired_pipe_1.ApiKeyNotExpiredPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "reset", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminUpdateDoc)(),
    (0, response_decorator_1.Response)('apiKey.update'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Put)('/update/:apiKey'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('apiKey', request_required_pipe_1.RequestRequiredPipe, api_key_parse_pipe_1.ApiKeyParsePipe, api_key_is_active_pipe_1.ApiKeyActivePipe, api_key_expired_pipe_1.ApiKeyNotExpiredPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [api_key_update_request_dto_1.ApiKeyUpdateRequestDto, Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "update", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminInactiveDoc)(),
    (0, response_decorator_1.Response)('apiKey.inactive'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Patch)('/update/:apiKey/inactive'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('apiKey', request_required_pipe_1.RequestRequiredPipe, api_key_parse_pipe_1.ApiKeyParsePipe, api_key_is_active_pipe_1.ApiKeyActivePipe, api_key_expired_pipe_1.ApiKeyNotExpiredPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "inactive", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminActiveDoc)(),
    (0, response_decorator_1.Response)('apiKey.active'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Patch)('/update/:apiKey/active'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('apiKey', request_required_pipe_1.RequestRequiredPipe, api_key_parse_pipe_1.ApiKeyParsePipe, api_key_is_active_pipe_1.ApiKeyInactivePipe, api_key_expired_pipe_1.ApiKeyNotExpiredPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "active", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminUpdateDateDoc)(),
    (0, response_decorator_1.Response)('apiKey.updateDate'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Put)('/update/:apiKey/date'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('apiKey', request_required_pipe_1.RequestRequiredPipe, api_key_parse_pipe_1.ApiKeyParsePipe, api_key_is_active_pipe_1.ApiKeyActivePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [api_key_update_date_request_dto_1.ApiKeyUpdateDateRequestDto, Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "updateDate", null);
__decorate([
    (0, api_key_admin_doc_1.ApiKeyAdminDeleteDoc)(),
    (0, response_decorator_1.Response)('apiKey.delete'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.DELETE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Delete)('/delete/:apiKey'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('apiKey', request_required_pipe_1.RequestRequiredPipe, api_key_parse_pipe_1.ApiKeyParsePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiKeyAdminController.prototype, "delete", null);
exports.ApiKeyAdminController = ApiKeyAdminController = __decorate([
    (0, swagger_1.ApiTags)('common.admin.apiKey'),
    (0, common_1.Controller)({
        version: '1',
        path: '/api-key',
    }),
    __metadata("design:paramtypes", [api_key_service_1.ApiKeyService,
        pagination_service_1.PaginationService])
], ApiKeyAdminController);
//# sourceMappingURL=api-key.admin.controller.js.map