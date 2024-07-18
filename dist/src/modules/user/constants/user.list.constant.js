"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_DEFAULT_BLOCKED = exports.USER_DEFAULT_STATUS = exports.USER_DEFAULT_AVAILABLE_ORDER_BY = exports.USER_DEFAULT_ORDER_BY = void 0;
const user_enum_constant_1 = require("./user.enum.constant");
exports.USER_DEFAULT_ORDER_BY = 'createdAt';
exports.USER_DEFAULT_AVAILABLE_ORDER_BY = ['createdAt'];
exports.USER_DEFAULT_STATUS = Object.values(user_enum_constant_1.ENUM_USER_STATUS);
exports.USER_DEFAULT_BLOCKED = [true, false];
//# sourceMappingURL=user.list.constant.js.map