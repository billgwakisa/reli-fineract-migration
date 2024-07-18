"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperArrayService = void 0;
const common_1 = require("@nestjs/common");
const lodash_1 = __importDefault(require("lodash"));
let HelperArrayService = class HelperArrayService {
    getFromLeft(array, length) {
        return lodash_1.default.take(array, length);
    }
    getFromRight(array, length) {
        return lodash_1.default.takeRight(array, length);
    }
    getDifference(a, b) {
        return lodash_1.default.difference(a, b);
    }
    getIntersection(a, b) {
        return lodash_1.default.intersection(a, b);
    }
    concat(a, b) {
        return lodash_1.default.concat(a, b);
    }
    concatUnique(a, b) {
        return lodash_1.default.union(a, b);
    }
    unique(array) {
        return lodash_1.default.uniq(array);
    }
    shuffle(array) {
        return lodash_1.default.shuffle(array);
    }
    equals(a, b) {
        return lodash_1.default.isEqual(a, b);
    }
    notEquals(a, b) {
        return !lodash_1.default.isEqual(a, b);
    }
    in(a, b) {
        return lodash_1.default.intersection(a, b).length > 0;
    }
    notIn(a, b) {
        return lodash_1.default.intersection(a, b).length === 0;
    }
    chunk(a, size) {
        return lodash_1.default.chunk(a, size);
    }
};
exports.HelperArrayService = HelperArrayService;
exports.HelperArrayService = HelperArrayService = __decorate([
    (0, common_1.Injectable)()
], HelperArrayService);
//# sourceMappingURL=helper.array.service.js.map