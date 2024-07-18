"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessThanOtherProperty = exports.LessThanOtherPropertyConstraint = exports.LessThanEqualOtherProperty = exports.LessThanEqualOtherPropertyConstraint = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
let LessThanEqualOtherPropertyConstraint = class LessThanEqualOtherPropertyConstraint {
    validate(value, args) {
        const [property] = args.constraints;
        const relatedValue = args.object[property];
        return value <= relatedValue;
    }
};
exports.LessThanEqualOtherPropertyConstraint = LessThanEqualOtherPropertyConstraint;
exports.LessThanEqualOtherPropertyConstraint = LessThanEqualOtherPropertyConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)()
], LessThanEqualOtherPropertyConstraint);
function LessThanEqualOtherProperty(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'LessThanEqualOtherProperty',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [property],
            validator: LessThanEqualOtherPropertyConstraint,
        });
    };
}
exports.LessThanEqualOtherProperty = LessThanEqualOtherProperty;
let LessThanOtherPropertyConstraint = class LessThanOtherPropertyConstraint {
    validate(value, args) {
        const [property] = args.constraints;
        const relatedValue = args.object[property];
        return value < relatedValue;
    }
};
exports.LessThanOtherPropertyConstraint = LessThanOtherPropertyConstraint;
exports.LessThanOtherPropertyConstraint = LessThanOtherPropertyConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)()
], LessThanOtherPropertyConstraint);
function LessThanOtherProperty(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'LessThanOtherProperty',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [property],
            validator: LessThanOtherPropertyConstraint,
        });
    };
}
exports.LessThanOtherProperty = LessThanOtherProperty;
//# sourceMappingURL=request.less-than-other-property.validation.js.map