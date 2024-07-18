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
exports.CountryPrivateController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_key_decorator_1 = require("../../../common/api-key/decorators/api-key.decorator");
const pagination_decorator_1 = require("../../../common/pagination/decorators/pagination.decorator");
const pagination_list_dto_1 = require("../../../common/pagination/dtos/pagination.list.dto");
const pagination_service_1 = require("../../../common/pagination/services/pagination.service");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const country_list_constant_1 = require("../constants/country.list.constant");
const country_private_doc_1 = require("../docs/country.private.doc");
const country_service_1 = require("../services/country.service");
let CountryPrivateController = class CountryPrivateController {
    constructor(countryService, paginationService) {
        this.countryService = countryService;
        this.paginationService = paginationService;
    }
    async list({ _search, _limit, _offset, _order }) {
        const find = {
            ..._search,
            isActive: true,
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
};
exports.CountryPrivateController = CountryPrivateController;
__decorate([
    (0, country_private_doc_1.CountryPrivateListDoc)(),
    (0, response_decorator_1.ResponsePaging)('country.list'),
    (0, api_key_decorator_1.ApiKeyPrivateProtected)(),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, pagination_decorator_1.PaginationQuery)({
        availableSearch: country_list_constant_1.COUNTRY_DEFAULT_AVAILABLE_SEARCH,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_list_dto_1.PaginationListDto]),
    __metadata("design:returntype", Promise)
], CountryPrivateController.prototype, "list", null);
exports.CountryPrivateController = CountryPrivateController = __decorate([
    (0, swagger_1.ApiTags)('modules.private.country'),
    (0, common_1.Controller)({
        version: '1',
        path: '/country',
    }),
    __metadata("design:paramtypes", [country_service_1.CountryService,
        pagination_service_1.PaginationService])
], CountryPrivateController);
//# sourceMappingURL=country.private.controller.js.map