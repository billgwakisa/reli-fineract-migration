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
exports.PaginationFilterNotEqualPipe = void 0;
const common_1 = require("@nestjs/common");
const interfaces_1 = require("@nestjs/common/interfaces");
const core_1 = require("@nestjs/core");
const pagination_service_1 = require("../services/pagination.service");
function PaginationFilterNotEqualPipe(field, options) {
    let MixinPaginationFilterEqualPipe = class MixinPaginationFilterEqualPipe {
        constructor(request, paginationService) {
            this.request = request;
            this.paginationService = paginationService;
        }
        async transform(value) {
            if (!value) {
                return undefined;
            }
            if (options?.raw) {
                this.addToRequestInstance(value);
                return {
                    [field]: value,
                };
            }
            const finalValue = options?.isNumber
                ? Number.parseInt(value)
                : value.trim();
            this.addToRequestInstance(finalValue);
            return this.paginationService.filterEqual(field, finalValue);
        }
        addToRequestInstance(value) {
            this.request.__pagination = {
                ...this.request.__pagination,
                filters: this.request.__pagination?.filters
                    ? {
                        ...this.request.__pagination?.filters,
                        [field]: value,
                    }
                    : { [field]: value },
            };
        }
    };
    MixinPaginationFilterEqualPipe = __decorate([
        (0, common_1.Injectable)({ scope: interfaces_1.Scope.REQUEST }),
        __param(0, (0, common_1.Inject)(core_1.REQUEST)),
        __metadata("design:paramtypes", [Object, pagination_service_1.PaginationService])
    ], MixinPaginationFilterEqualPipe);
    return (0, common_1.mixin)(MixinPaginationFilterEqualPipe);
}
exports.PaginationFilterNotEqualPipe = PaginationFilterNotEqualPipe;
//# sourceMappingURL=pagination.filter-not-equal.pipe.js.map