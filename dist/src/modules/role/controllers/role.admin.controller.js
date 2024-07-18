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
exports.RoleAdminController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_key_decorator_1 = require("../../../common/api-key/decorators/api-key.decorator");
const auth_jwt_decorator_1 = require("../../../common/auth/decorators/auth.jwt.decorator");
const pagination_decorator_1 = require("../../../common/pagination/decorators/pagination.decorator");
const pagination_list_dto_1 = require("../../../common/pagination/dtos/pagination.list.dto");
const pagination_service_1 = require("../../../common/pagination/services/pagination.service");
const policy_enum_constant_1 = require("../../../common/policy/constants/policy.enum.constant");
const policy_decorator_1 = require("../../../common/policy/decorators/policy.decorator");
const request_required_pipe_1 = require("../../../common/request/pipes/request.required.pipe");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const role_list_constant_1 = require("../constants/role.list.constant");
const role_status_code_constant_1 = require("../constants/role.status-code.constant");
const role_admin_doc_1 = require("../docs/role.admin.doc");
const role_create_request_dto_1 = require("../dtos/request/role.create.request.dto");
const role_update_request_dto_1 = require("../dtos/request/role.update.request.dto");
const role_is_active_pipe_1 = require("../pipes/role.is-active.pipe");
const role_parse_pipe_1 = require("../pipes/role.parse.pipe");
const role_service_1 = require("../services/role.service");
const user_service_1 = require("../../user/services/user.service");
let RoleAdminController = class RoleAdminController {
    constructor(paginationService, roleService, userService) {
        this.paginationService = paginationService;
        this.roleService = roleService;
        this.userService = userService;
    }
    async list({ _search, _limit, _offset, _order }, isActive, type) {
        const find = {
            ..._search,
            ...isActive,
            ...type,
        };
        const roles = await this.roleService.findAll(find, {
            paging: {
                limit: _limit,
                offset: _offset,
            },
            order: _order,
        });
        const total = await this.roleService.getTotal(find);
        const totalPage = this.paginationService.totalPage(total, _limit);
        const mapRoles = await this.roleService.mapList(roles);
        return {
            _pagination: { total, totalPage },
            data: mapRoles,
        };
    }
    async get(role) {
        const mapRole = await this.roleService.mapGet(role);
        return { data: mapRole };
    }
    async create({ name, description, type, permissions }) {
        const exist = await this.roleService.existByName(name);
        if (exist) {
            throw new common_1.ConflictException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.EXIST_ERROR,
                message: 'role.error.exist',
            });
        }
        const create = await this.roleService.create({
            name,
            description,
            type,
            permissions,
        });
        return {
            data: { _id: create._id },
        };
    }
    async update(role, { description, permissions, type }) {
        await this.roleService.update(role, { description, permissions, type });
        return {
            data: { _id: role._id },
        };
    }
    async delete(role) {
        const used = await this.userService.findOne({
            role: role._id,
        });
        if (used) {
            throw new common_1.ConflictException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.USED_ERROR,
                message: 'role.error.used',
            });
        }
        await this.roleService.delete(role);
        return;
    }
    async inactive(role) {
        await this.roleService.inactive(role);
        return;
    }
    async active(role) {
        await this.roleService.active(role);
        return;
    }
};
exports.RoleAdminController = RoleAdminController;
__decorate([
    (0, role_admin_doc_1.RoleAdminListDoc)(),
    (0, response_decorator_1.ResponsePaging)('role.list'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.ROLE,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, pagination_decorator_1.PaginationQuery)({ availableSearch: role_list_constant_1.ROLE_DEFAULT_AVAILABLE_SEARCH })),
    __param(1, (0, pagination_decorator_1.PaginationQueryFilterInBoolean)('isActive', role_list_constant_1.ROLE_DEFAULT_IS_ACTIVE)),
    __param(2, (0, pagination_decorator_1.PaginationQueryFilterInEnum)('type', role_list_constant_1.ROLE_DEFAULT_POLICY_ROLE_TYPE, policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_list_dto_1.PaginationListDto, Object, Object]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "list", null);
__decorate([
    (0, role_admin_doc_1.RoleAdminGetDoc)(),
    (0, response_decorator_1.Response)('role.get'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.ROLE,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Get)('get/:role'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('role', request_required_pipe_1.RequestRequiredPipe, role_parse_pipe_1.RoleParsePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "get", null);
__decorate([
    (0, role_admin_doc_1.RoleAdminCreateDoc)(),
    (0, response_decorator_1.Response)('role.create'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.ROLE,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.CREATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Post)('/create'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_create_request_dto_1.RoleCreateRequestDto]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "create", null);
__decorate([
    (0, role_admin_doc_1.RoleAdminUpdateDoc)(),
    (0, response_decorator_1.Response)('role.update'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.ROLE,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Put)('/update/:role'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('role', request_required_pipe_1.RequestRequiredPipe, role_parse_pipe_1.RoleParsePipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, role_update_request_dto_1.RoleUpdateRequestDto]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "update", null);
__decorate([
    (0, role_admin_doc_1.RoleAdminDeleteDoc)(),
    (0, response_decorator_1.Response)('role.delete'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.ROLE,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.DELETE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Delete)('/delete/:role'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('role', request_required_pipe_1.RequestRequiredPipe, role_parse_pipe_1.RoleParsePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "delete", null);
__decorate([
    (0, role_admin_doc_1.RoleAdminInactiveDoc)(),
    (0, response_decorator_1.Response)('role.inactive'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.ROLE,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Patch)('/update/:role/inactive'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('role', request_required_pipe_1.RequestRequiredPipe, role_parse_pipe_1.RoleParsePipe, role_is_active_pipe_1.RoleActivePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "inactive", null);
__decorate([
    (0, role_admin_doc_1.RoleAdminActiveDoc)(),
    (0, response_decorator_1.Response)('role.active'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.ROLE,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Patch)('/update/:role/active'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('role', request_required_pipe_1.RequestRequiredPipe, role_parse_pipe_1.RoleParsePipe, role_is_active_pipe_1.RoleInactivePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "active", null);
exports.RoleAdminController = RoleAdminController = __decorate([
    (0, swagger_1.ApiTags)('modules.admin.role'),
    (0, common_1.Controller)({
        version: '1',
        path: '/role',
    }),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        role_service_1.RoleService,
        user_service_1.UserService])
], RoleAdminController);
//# sourceMappingURL=role.admin.controller.js.map