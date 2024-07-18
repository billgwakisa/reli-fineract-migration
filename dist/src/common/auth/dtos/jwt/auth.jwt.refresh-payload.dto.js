"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthJwtRefreshPayloadDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const auth_jwt_access_payload_dto_1 = require("./auth.jwt.access-payload.dto");
class AuthJwtRefreshPayloadDto extends (0, swagger_1.OmitType)(auth_jwt_access_payload_dto_1.AuthJwtAccessPayloadDto, ['role', 'permissions', 'type', 'email']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.AuthJwtRefreshPayloadDto = AuthJwtRefreshPayloadDto;
//# sourceMappingURL=auth.jwt.refresh-payload.dto.js.map