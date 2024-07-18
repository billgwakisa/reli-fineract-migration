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
exports.CountryAdminController = void 0;
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
const country_list_constant_1 = require("../constants/country.list.constant");
const country_admin_doc_1 = require("../docs/country.admin.doc");
const country_is_active_pipe_1 = require("../pipes/country.is-active.pipe");
const country_parse_pipe_1 = require("../pipes/country.parse.pipe");
const country_service_1 = require("../services/country.service");
let CountryAdminController = class CountryAdminController {
    constructor(countryService, paginationService) {
        this.countryService = countryService;
        this.paginationService = paginationService;
    }
    async list({ _search, _limit, _offset, _order }, isActive) {
        const find = {
            ..._search,
            ...isActive,
        };
        const countries = await this.countryService.findAll(find, {
            paging: {
                limit: _limit,
                offset: _offset,
            },
            order: _order,
        });
        const total = await this.countryService.getTotal(find);
        const totalPage = this.paginationService.totalPage(total, _limit);
        const mapped = await this.countryService.mapList(countries);
        return {
            _pagination: { total, totalPage },
            data: mapped,
        };
    }
    async get(country) {
        const mapped = await this.countryService.mapGet(country);
        return { data: mapped };
    }
    async inactive(country) {
        await this.countryService.inactive(country);
        return;
    }
    async active(country) {
        await this.countryService.active(country);
        return;
    }
};
exports.CountryAdminController = CountryAdminController;
__decorate([
    (0, country_admin_doc_1.CountryAdminListDoc)(),
    (0, response_decorator_1.ResponsePaging)('country.list'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.COUNTRY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, pagination_decorator_1.PaginationQuery)({
        availableSearch: country_list_constant_1.COUNTRY_DEFAULT_AVAILABLE_SEARCH,
    })),
    __param(1, (0, pagination_decorator_1.PaginationQueryFilterInBoolean)('isActive', country_list_constant_1.COUNTRY_DEFAULT_IS_ACTIVE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_list_dto_1.PaginationListDto, Object]),
    __metadata("design:returntype", Promise)
], CountryAdminController.prototype, "list", null);
__decorate([
    (0, country_admin_doc_1.CountryAdminGetDoc)(),
    (0, response_decorator_1.Response)('country.get'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.COUNTRY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, common_1.Get)('/get/:country'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('country', request_required_pipe_1.RequestRequiredPipe, country_parse_pipe_1.CountryParsePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CountryAdminController.prototype, "get", null);
__decorate([
    (0, country_admin_doc_1.CountryAdminInactiveDoc)(),
    (0, response_decorator_1.Response)('country.inactive'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.COUNTRY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Patch)('/update/:country/inactive'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('country', request_required_pipe_1.RequestRequiredPipe, country_parse_pipe_1.CountryParsePipe, country_is_active_pipe_1.CountryActivePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CountryAdminController.prototype, "inactive", null);
__decorate([
    (0, country_admin_doc_1.CountryAdminActiveDoc)(),
    (0, response_decorator_1.Response)('country.active'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.COUNTRY,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Patch)('/update/:country/active'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('country', request_required_pipe_1.RequestRequiredPipe, country_parse_pipe_1.CountryParsePipe, country_is_active_pipe_1.CountryInactivePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CountryAdminController.prototype, "active", null);
exports.CountryAdminController = CountryAdminController = __decorate([
    (0, swagger_1.ApiTags)('modules.admin.country'),
    (0, common_1.Controller)({
        version: '1',
        path: '/country',
    }),
    __metadata("design:paramtypes", [country_service_1.CountryService,
        pagination_service_1.PaginationService])
], CountryAdminController);
//# sourceMappingURL=country.admin.controller.js.map