"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationService = void 0;
const common_1 = require("@nestjs/common");
const database_decorator_1 = require("../../database/decorators/database.decorator");
const pagination_constant_1 = require("../constants/pagination.constant");
let PaginationService = class PaginationService {
    offset(page, perPage) {
        page =
            page > pagination_constant_1.PAGINATION_DEFAULT_MAX_PAGE
                ? pagination_constant_1.PAGINATION_DEFAULT_MAX_PAGE
                : page;
        perPage =
            perPage > pagination_constant_1.PAGINATION_DEFAULT_MAX_PER_PAGE
                ? pagination_constant_1.PAGINATION_DEFAULT_MAX_PER_PAGE
                : perPage;
        const offset = (page - 1) * perPage;
        return offset;
    }
    totalPage(totalData, perPage) {
        let totalPage = Math.ceil(totalData / perPage);
        totalPage = totalPage === 0 ? 1 : totalPage;
        return totalPage > pagination_constant_1.PAGINATION_DEFAULT_MAX_PAGE
            ? pagination_constant_1.PAGINATION_DEFAULT_MAX_PAGE
            : totalPage;
    }
    page(page) {
        return page
            ? page > pagination_constant_1.PAGINATION_DEFAULT_MAX_PAGE
                ? pagination_constant_1.PAGINATION_DEFAULT_MAX_PAGE
                : page
            : pagination_constant_1.PAGINATION_DEFAULT_PAGE;
    }
    perPage(perPage) {
        return perPage
            ? perPage > pagination_constant_1.PAGINATION_DEFAULT_MAX_PER_PAGE
                ? pagination_constant_1.PAGINATION_DEFAULT_MAX_PER_PAGE
                : perPage
            : pagination_constant_1.PAGINATION_DEFAULT_PER_PAGE;
    }
    order(orderByValue = pagination_constant_1.PAGINATION_DEFAULT_ORDER_BY, orderDirectionValue = pagination_constant_1.PAGINATION_DEFAULT_ORDER_DIRECTION, availableOrderBy = pagination_constant_1.PAGINATION_DEFAULT_AVAILABLE_ORDER_BY) {
        const orderBy = availableOrderBy.includes(orderByValue)
            ? orderByValue
            : pagination_constant_1.PAGINATION_DEFAULT_ORDER_BY;
        return { [orderBy]: orderDirectionValue };
    }
    search(searchValue, availableSearch) {
        if (searchValue === undefined ||
            searchValue === '' ||
            availableSearch.length === 0) {
            return undefined;
        }
        return (0, database_decorator_1.DatabaseQueryOr)(availableSearch.map(val => (0, database_decorator_1.DatabaseQueryContain)(val, searchValue)));
    }
    filterEqual(field, filterValue) {
        return (0, database_decorator_1.DatabaseQueryEqual)(field, filterValue);
    }
    filterNotEqual(field, filterValue) {
        return (0, database_decorator_1.DatabaseQueryNotEqual)(field, filterValue);
    }
    filterContain(field, filterValue) {
        return (0, database_decorator_1.DatabaseQueryContain)(field, filterValue);
    }
    filterContainFullMatch(field, filterValue) {
        return (0, database_decorator_1.DatabaseQueryContain)(field, filterValue, { fullWord: true });
    }
    filterIn(field, filterValue) {
        return (0, database_decorator_1.DatabaseQueryIn)(field, filterValue);
    }
    filterNin(field, filterValue) {
        return (0, database_decorator_1.DatabaseQueryNin)(field, filterValue);
    }
    filterDate(field, filterValue) {
        return (0, database_decorator_1.DatabaseQueryEqual)(field, filterValue);
    }
};
exports.PaginationService = PaginationService;
exports.PaginationService = PaginationService = __decorate([
    (0, common_1.Injectable)()
], PaginationService);
//# sourceMappingURL=pagination.service.js.map