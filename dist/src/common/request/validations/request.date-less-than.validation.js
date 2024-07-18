"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateLessThan = exports.DateLessThanConstraint = exports.DateLessThanEqual = exports.DateLessThanEqualConstraint = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
let DateLessThanEqualConstraint = class DateLessThanEqualConstraint {
    validate(value, args) {
        const [date] = args.constraints;
        return value <= date;
    }
};
exports.DateLessThanEqualConstraint = DateLessThanEqualConstraint;
exports.DateLessThanEqualConstraint = DateLessThanEqualConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)()
], DateLessThanEqualConstraint);
function DateLessThanEqual(date, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'DateLessThanEqual',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [date],
            validator: DateLessThanEqualConstraint,
        });
    };
}
exports.DateLessThanEqual = DateLessThanEqual;
let DateLessThanConstraint = class DateLessThanConstraint {
    validate(value, args) {
        const [date] = args.constraints;
        return value < date;
    }
};
exports.DateLessThanConstraint = DateLessThanConstraint;
exports.DateLessThanConstraint = DateLessThanConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)()
], DateLessThanConstraint);
function DateLessThan(date, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'DateLessThan',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [date],
            validator: DateLessThanConstraint,
        });
    };
}
exports.DateLessThan = DateLessThan;
//# sourceMappingURL=request.date-less-than.validation.js.map