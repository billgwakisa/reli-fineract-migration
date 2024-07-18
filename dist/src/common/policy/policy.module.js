"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PolicyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyModule = void 0;
const common_1 = require("@nestjs/common");
const policy_factory_1 = require("./factories/policy.factory");
let PolicyModule = PolicyModule_1 = class PolicyModule {
    static forRoot() {
        return {
            module: PolicyModule_1,
            providers: [policy_factory_1.PolicyAbilityFactory],
            exports: [policy_factory_1.PolicyAbilityFactory],
            imports: [],
        };
    }
};
exports.PolicyModule = PolicyModule;
exports.PolicyModule = PolicyModule = PolicyModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], PolicyModule);
//# sourceMappingURL=policy.module.js.map