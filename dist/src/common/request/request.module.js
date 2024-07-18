"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RequestModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const request_timeout_interceptor_1 = require("./interceptors/request.timeout.interceptor");
const request_validation_exception_1 = require("./exceptions/request.validation.exception");
const request_date_greater_than_validation_1 = require("./validations/request.date-greater-than.validation");
const request_date_less_than_validation_1 = require("./validations/request.date-less-than.validation");
const request_greater_than_other_property_validation_1 = require("./validations/request.greater-than-other-property.validation");
const request_is_password_validation_1 = require("./validations/request.is-password.validation");
const request_less_than_other_property_validation_1 = require("./validations/request.less-than-other-property.validation");
const request_safe_string_validation_1 = require("./validations/request.safe-string.validation");
let RequestModule = RequestModule_1 = class RequestModule {
    static forRoot() {
        return {
            module: RequestModule_1,
            controllers: [],
            providers: [
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: request_timeout_interceptor_1.RequestTimeoutInterceptor,
                },
                {
                    provide: core_1.APP_PIPE,
                    useFactory: () => new common_1.ValidationPipe({
                        transform: true,
                        skipUndefinedProperties: true,
                        forbidUnknownValues: true,
                        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                        exceptionFactory: async (errors) => new request_validation_exception_1.RequestValidationException(errors),
                    }),
                },
                request_date_greater_than_validation_1.DateGreaterThanEqualConstraint,
                request_date_greater_than_validation_1.DateGreaterThanConstraint,
                request_date_less_than_validation_1.DateLessThanEqualConstraint,
                request_date_less_than_validation_1.DateLessThanConstraint,
                request_greater_than_other_property_validation_1.GreaterThanEqualOtherPropertyConstraint,
                request_greater_than_other_property_validation_1.GreaterThanOtherPropertyConstraint,
                request_is_password_validation_1.IsPasswordConstraint,
                request_less_than_other_property_validation_1.LessThanEqualOtherPropertyConstraint,
                request_less_than_other_property_validation_1.LessThanOtherPropertyConstraint,
                request_safe_string_validation_1.SafeStringConstraint,
            ],
            imports: [],
        };
    }
};
exports.RequestModule = RequestModule;
exports.RequestModule = RequestModule = RequestModule_1 = __decorate([
    (0, common_1.Module)({})
], RequestModule);
//# sourceMappingURL=request.module.js.map