"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const jobs_module_1 = require("../jobs/jobs.module");
const router_module_1 = require("../router/router.module");
const common_module_1 = require("../common/common.module");
const app_middleware_module_1 = require("./app.middleware.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            app_middleware_module_1.AppMiddlewareModule,
            common_module_1.CommonModule,
            jobs_module_1.JobsModule.forRoot(),
            router_module_1.RouterModule.forRoot(),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map