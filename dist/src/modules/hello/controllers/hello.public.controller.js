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
exports.HelloPublicController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const helper_date_service_1 = require("../../../common/helper/services/helper.date.service");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const hello_doc_1 = require("../docs/hello.doc");
let HelloPublicController = class HelloPublicController {
    constructor(helperDateService) {
        this.helperDateService = helperDateService;
    }
    async hello() {
        const newDate = this.helperDateService.create();
        const logger = new common_1.Logger();
        logger.log('Original Hello');
        return {
            data: {
                date: newDate,
                format: this.helperDateService.format(newDate),
                timestamp: this.helperDateService.createTimestamp(newDate),
            },
        };
    }
};
exports.HelloPublicController = HelloPublicController;
__decorate([
    (0, hello_doc_1.HelloDoc)(),
    (0, response_decorator_1.Response)('hello.hello'),
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HelloPublicController.prototype, "hello", null);
exports.HelloPublicController = HelloPublicController = __decorate([
    (0, swagger_1.ApiTags)('modules.public.hello'),
    (0, common_1.Controller)({
        version: common_1.VERSION_NEUTRAL,
        path: '/hello',
    }),
    __metadata("design:paramtypes", [helper_date_service_1.HelperDateService])
], HelloPublicController);
//# sourceMappingURL=hello.public.controller.js.map