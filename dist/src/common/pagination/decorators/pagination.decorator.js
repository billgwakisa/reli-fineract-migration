"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationQueryFilterDate = exports.PaginationQueryFilterStringContain = exports.PaginationQueryFilterEqual = exports.PaginationQueryFilterNotEqual = exports.PaginationQueryFilterNinEnum = exports.PaginationQueryFilterInEnum = exports.PaginationQueryFilterInBoolean = exports.PaginationQuery = void 0;
const common_1 = require("@nestjs/common");
const pagination_filter_date_pipe_1 = require("../pipes/pagination.filter-date.pipe");
const pagination_filter_equal_pipe_1 = require("../pipes/pagination.filter-equal.pipe");
const pagination_filter_in_boolean_pipe_1 = require("../pipes/pagination.filter-in-boolean.pipe");
const pagination_filter_in_enum_pipe_1 = require("../pipes/pagination.filter-in-enum.pipe");
const pagination_filter_nin_enum_pipe_1 = require("../pipes/pagination.filter-nin-enum.pipe");
const pagination_filter_not_equal_pipe_1 = require("../pipes/pagination.filter-not-equal.pipe");
const pagination_filter_string_contain_pipe_1 = require("../pipes/pagination.filter-string-contain.pipe");
const pagination_order_pipe_1 = require("../pipes/pagination.order.pipe");
const pagination_paging_pipe_1 = require("../pipes/pagination.paging.pipe");
const pagination_search_pipe_1 = require("../pipes/pagination.search.pipe");
function PaginationQuery(options) {
    return (0, common_1.Query)((0, pagination_search_pipe_1.PaginationSearchPipe)(options?.availableSearch), (0, pagination_paging_pipe_1.PaginationPagingPipe)(options?.defaultPerPage), (0, pagination_order_pipe_1.PaginationOrderPipe)(options?.defaultOrderBy, options?.defaultOrderDirection, options?.availableOrderBy));
}
exports.PaginationQuery = PaginationQuery;
function PaginationQueryFilterInBoolean(field, defaultValue, options) {
    return (0, common_1.Query)(options?.queryField ?? field, (0, pagination_filter_in_boolean_pipe_1.PaginationFilterInBooleanPipe)(field, defaultValue, options));
}
exports.PaginationQueryFilterInBoolean = PaginationQueryFilterInBoolean;
function PaginationQueryFilterInEnum(field, defaultValue, defaultEnum, options) {
    return (0, common_1.Query)(options?.queryField ?? field, (0, pagination_filter_in_enum_pipe_1.PaginationFilterInEnumPipe)(field, defaultValue, defaultEnum, options));
}
exports.PaginationQueryFilterInEnum = PaginationQueryFilterInEnum;
function PaginationQueryFilterNinEnum(field, defaultValue, defaultEnum, options) {
    return (0, common_1.Query)(options?.queryField ?? field, (0, pagination_filter_nin_enum_pipe_1.PaginationFilterNinEnumPipe)(field, defaultValue, defaultEnum, options));
}
exports.PaginationQueryFilterNinEnum = PaginationQueryFilterNinEnum;
function PaginationQueryFilterNotEqual(field, options) {
    return (0, common_1.Query)(options?.queryField ?? field, (0, pagination_filter_not_equal_pipe_1.PaginationFilterNotEqualPipe)(field, options));
}
exports.PaginationQueryFilterNotEqual = PaginationQueryFilterNotEqual;
function PaginationQueryFilterEqual(field, options) {
    return (0, common_1.Query)(options?.queryField ?? field, (0, pagination_filter_equal_pipe_1.PaginationFilterEqualPipe)(field, options));
}
exports.PaginationQueryFilterEqual = PaginationQueryFilterEqual;
function PaginationQueryFilterStringContain(field, options) {
    return (0, common_1.Query)(options?.queryField ?? field, (0, pagination_filter_string_contain_pipe_1.PaginationFilterStringContainPipe)(field, options));
}
exports.PaginationQueryFilterStringContain = PaginationQueryFilterStringContain;
function PaginationQueryFilterDate(field, options) {
    return (0, common_1.Query)(options?.queryField ?? field, (0, pagination_filter_date_pipe_1.PaginationFilterDatePipe)(field, options));
}
exports.PaginationQueryFilterDate = PaginationQueryFilterDate;
//# sourceMappingURL=pagination.decorator.js.map