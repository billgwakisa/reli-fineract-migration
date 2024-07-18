"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocQueryBlocked = exports.UserDocQueryStatus = exports.UserDocQueryRole = exports.UserDocParamsId = void 0;
const faker_1 = require("@faker-js/faker");
const user_enum_constant_1 = require("./user.enum.constant");
exports.UserDocParamsId = [
    {
        name: 'user',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: faker_1.faker.string.uuid(),
    },
];
exports.UserDocQueryRole = [
    {
        name: 'role',
        allowEmptyValue: true,
        required: false,
        type: 'string',
        example: faker_1.faker.string.uuid(),
    },
];
exports.UserDocQueryStatus = [
    {
        name: 'status',
        allowEmptyValue: true,
        required: false,
        type: 'string',
        example: Object.values(user_enum_constant_1.ENUM_USER_STATUS).join(','),
        description: "value with ',' delimiter",
    },
];
exports.UserDocQueryBlocked = [
    {
        name: 'blocked',
        allowEmptyValue: true,
        required: false,
        type: 'string',
        example: 'true,false',
        description: "value with ',' delimiter",
    },
];
//# sourceMappingURL=user.doc.constant.js.map