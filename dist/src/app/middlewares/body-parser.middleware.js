"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextBodyParserMiddleware = exports.RawBodyParserMiddleware = exports.JsonBodyParserMiddleware = exports.UrlencodedBodyParserMiddleware = void 0;
const common_1 = require("@nestjs/common");
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = require("@nestjs/config");
let UrlencodedBodyParserMiddleware = class UrlencodedBodyParserMiddleware {
    constructor(configService) {
        this.configService = configService;
        this.maxFile = this.configService.get('middleware.body.urlencoded.maxFileSize');
    }
    use(req, res, next) {
        body_parser_1.default.urlencoded({
            extended: false,
            limit: this.maxFile,
        })(req, res, next);
    }
};
exports.UrlencodedBodyParserMiddleware = UrlencodedBodyParserMiddleware;
exports.UrlencodedBodyParserMiddleware = UrlencodedBodyParserMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UrlencodedBodyParserMiddleware);
let JsonBodyParserMiddleware = class JsonBodyParserMiddleware {
    constructor(configService) {
        this.configService = configService;
        this.maxFile = this.configService.get('middleware.body.json.maxFileSize');
    }
    use(req, res, next) {
        body_parser_1.default.json({
            limit: this.maxFile,
        })(req, res, next);
    }
};
exports.JsonBodyParserMiddleware = JsonBodyParserMiddleware;
exports.JsonBodyParserMiddleware = JsonBodyParserMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], JsonBodyParserMiddleware);
let RawBodyParserMiddleware = class RawBodyParserMiddleware {
    constructor(configService) {
        this.configService = configService;
        this.maxFile = this.configService.get('middleware.body.raw.maxFileSize');
    }
    use(req, res, next) {
        body_parser_1.default.raw({
            limit: this.maxFile,
        })(req, res, next);
    }
};
exports.RawBodyParserMiddleware = RawBodyParserMiddleware;
exports.RawBodyParserMiddleware = RawBodyParserMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RawBodyParserMiddleware);
let TextBodyParserMiddleware = class TextBodyParserMiddleware {
    constructor(configService) {
        this.configService = configService;
        this.maxFile = this.configService.get('middleware.body.text.maxFileSize');
    }
    use(req, res, next) {
        body_parser_1.default.text({
            limit: this.maxFile,
        })(req, res, next);
    }
};
exports.TextBodyParserMiddleware = TextBodyParserMiddleware;
exports.TextBodyParserMiddleware = TextBodyParserMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], TextBodyParserMiddleware);
//# sourceMappingURL=body-parser.middleware.js.map