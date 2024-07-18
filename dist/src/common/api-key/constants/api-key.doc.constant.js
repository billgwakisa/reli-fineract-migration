"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyDocParamsId = exports.ApiKeyDocQueryType = exports.ApiKeyDocQueryIsActive = void 0;
const faker_1 = require("@faker-js/faker");
const api_key_enum_constant_1 = require("./api-key.enum.constant");
exports.ApiKeyDocQueryIsActive = [
    {
        name: 'isActive',
        allowEmptyValue: true,
        required: false,
        type: 'string',
        example: 'true,false',
        description: "boolean value with ',' delimiter",
    },
];
exports.ApiKeyDocQueryType = [
    {
        name: 'type',
        allowEmptyValue: true,
        required: false,
        type: 'string',
        example: Object.values(api_key_enum_constant_1.ENUM_API_KEY_TYPE).join(','),
        description: "boolean value with ',' delimiter",
    },
];
exports.ApiKeyDocParamsId = [
    {
        name: 'apiKey',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: faker_1.faker.string.uuid(),
    },
];
//# sourceMappingURL=api-key.doc.constant.js.map