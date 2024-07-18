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
exports.SettingAdminController = void 0;
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
const setting_list_constant_1 = require("../constants/setting.list.constant");
const setting_status_code_constant_1 = require("../constants/setting.status-code.constant");
const setting_admin_doc_1 = require("../docs/setting.admin.doc");
const setting_update_request_dto_1 = require("../dtos/request/setting.update.request.dto");
const setting_parse_pipe_1 = require("../pipes/setting.parse.pipe");
const setting_service_1 = require("../services/setting.service");
let SettingAdminController = class SettingAdminController {
    constructor(settingService, paginationService) {
        this.settingService = settingService;
        this.paginationService = paginationService;
    }
    async list({ _search, _limit, _offset, _order }) {
        const find = {
            ..._search,
        };
        const settings = await this.settingService.findAll(find, {
            paging: {
                limit: _limit,
                offset: _offset,
            },
            order: _order,
        });
        const mapSettings = await this.settingService.mapList(settings);
        const total = await this.settingService.getTotal(find);
        const totalPage = this.paginationService.totalPage(total, _limit);
        return {
            _pagination: { total, totalPage },
            data: mapSettings,
        };
    }
    async get(setting) {
        const mapSetting = await this.settingService.mapGet(setting);
        return { data: mapSetting };
    }
    async update(setting, body) {
        const check = this.settingService.checkValue(setting.type, body.value);
        if (!check) {
            throw new common_1.BadRequestException({
                statusCode: setting_status_code_constant_1.ENUM_SETTING_STATUS_CODE_ERROR.VALUE_NOT_ALLOWED_ERROR,
                message: 'setting.error.valueNotAllowed',
            });
        }
        await this.settingService.update(setting, body);
        return {
            data: { _id: setting._id },
        };
    }
};
exports.SettingAdminController = SettingAdminController;
__decorate([
    (0, setting_admin_doc_1.SettingAdminListDoc)(),
    (0, response_decorator_1.ResponsePaging)('setting.list'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.SETTING,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, pagination_decorator_1.PaginationQuery)({
        availableSearch: setting_list_constant_1.SETTING_DEFAULT_AVAILABLE_SEARCH,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_list_dto_1.PaginationListDto]),
    __metadata("design:returntype", Promise)
], SettingAdminController.prototype, "list", null);
__decorate([
    (0, setting_admin_doc_1.SettingAdminGetDoc)(),
    (0, response_decorator_1.Response)('setting.get'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.SETTING,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, common_1.Get)('/get/:setting'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('setting', request_required_pipe_1.RequestRequiredPipe, setting_parse_pipe_1.SettingParsePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SettingAdminController.prototype, "get", null);
__decorate([
    (0, setting_admin_doc_1.SettingAdminUpdateDoc)(),
    (0, response_decorator_1.Response)('setting.update'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.SETTING,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, common_1.Put)('/update/:setting'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('setting', request_required_pipe_1.RequestRequiredPipe, setting_parse_pipe_1.SettingParsePipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, setting_update_request_dto_1.SettingUpdateRequestDto]),
    __metadata("design:returntype", Promise)
], SettingAdminController.prototype, "update", null);
exports.SettingAdminController = SettingAdminController = __decorate([
    (0, swagger_1.ApiTags)('modules.admin.setting'),
    (0, common_1.Controller)({
        version: '1',
        path: '/setting',
    }),
    __metadata("design:paramtypes", [setting_service_1.SettingService,
        pagination_service_1.PaginationService])
], SettingAdminController);
//# sourceMappingURL=setting.admin.controller.js.map