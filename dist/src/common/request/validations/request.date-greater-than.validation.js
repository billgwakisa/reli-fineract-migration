"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateGreaterThan = exports.DateGreaterThanConstraint = exports.DateGreaterThanEqual = exports.DateGreaterThanEqualConstraint = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
let DateGreaterThanEqualConstraint = class DateGreaterThanEqualConstraint {
    validate(value, args) {
        const [date] = args.constraints;
        return value >= date;
    }
};
exports.DateGreaterThanEqualConstraint = DateGreaterThanEqualConstraint;
exports.DateGreaterThanEqualConstraint = DateGreaterThanEqualConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)()
], DateGreaterThanEqualConstraint);
function DateGreaterThanEqual(date, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'DateGreaterThanEqual',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [date],
            validator: DateGreaterThanEqualConstraint,
        });
    };
}
exports.DateGreaterThanEqual = DateGreaterThanEqual;
let DateGreaterThanConstraint = class DateGreaterThanConstraint {
    validate(value, args) {
        const [date] = args.constraints;
        return value > date;
    }
};
exports.DateGreaterThanConstraint = DateGreaterThanConstraint;
exports.DateGreaterThanConstraint = DateGreaterThanConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)()
], DateGreaterThanConstraint);
function DateGreaterThan(date, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'DateGreaterThan',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [date],
            validator: DateGreaterThanConstraint,
        });
    };
}
exports.DateGreaterThan = DateGreaterThan;
//# sourceMappingURL=request.date-greater-than.validation.js.map