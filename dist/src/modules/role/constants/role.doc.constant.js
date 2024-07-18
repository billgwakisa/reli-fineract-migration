"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleDocParamsId = exports.RoleDocQueryType = exports.RoleDocQueryIsActive = void 0;
const faker_1 = require("@faker-js/faker");
const policy_enum_constant_1 = require("../../../common/policy/constants/policy.enum.constant");
exports.RoleDocQueryIsActive = [
    {
        name: 'isActive',
        allowEmptyValue: true,
        required: false,
        type: 'string',
        example: 'true,false',
        description: "boolean value with ',' delimiter",
    },
];
exports.RoleDocQueryType = [
    {
        name: 'type',
        allowEmptyValue: true,
        required: false,
        type: 'string',
        example: Object.values(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE).join(','),
        description: "enum value with ',' delimiter",
    },
];
exports.RoleDocParamsId = [
    {
        name: 'role',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: faker_1.faker.string.uuid(),
    },
];
//# sourceMappingURL=role.doc.constant.js.map