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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const aws_ses_service_1 = require("../../../common/aws/services/aws.ses.service");
const email_enum_constant_1 = require("../constants/email.enum.constant");
const case_1 = require("case");
const config_1 = require("@nestjs/config");
const fs_1 = require("fs");
const helper_date_service_1 = require("../../../common/helper/services/helper.date.service");
const helper_enum_constant_1 = require("../../../common/helper/constants/helper.enum.constant");
let EmailService = class EmailService {
    constructor(awsSESService, helperDateService, configService) {
        this.awsSESService = awsSESService;
        this.helperDateService = helperDateService;
        this.configService = configService;
        this.fromEmail = this.configService.get('email.fromEmail');
    }
    async createChangePassword() {
        try {
            await this.awsSESService.createTemplate({
                name: email_enum_constant_1.ENUM_EMAIL.CHANGE_PASSWORD,
                subject: `Change Password`,
                htmlBody: (0, fs_1.readFileSync)('./templates/email.change-password.template.html', 'utf8'),
            });
            return true;
        }
        catch (err) {
            return false;
        }
    }
    async getChangePassword() {
        try {
            const template = await this.awsSESService.getTemplate({
                name: email_enum_constant_1.ENUM_EMAIL.CHANGE_PASSWORD,
            });
            return template;
        }
        catch (err) {
            return;
        }
    }
    async deleteChangePassword() {
        try {
            await this.awsSESService.deleteTemplate({
                name: email_enum_constant_1.ENUM_EMAIL.CHANGE_PASSWORD,
            });
            return true;
        }
        catch (err) {
            return false;
        }
    }
    async sendChangePassword({ name, email }) {
        try {
            await this.awsSESService.send({
                templateName: email_enum_constant_1.ENUM_EMAIL.CHANGE_PASSWORD,
                recipients: [email],
                sender: this.fromEmail,
                templateData: {
                    name: (0, case_1.title)(name),
                },
            });
            return true;
        }
        catch (err) {
            return false;
        }
    }
    async createWelcome() {
        try {
            await this.awsSESService.createTemplate({
                name: email_enum_constant_1.ENUM_EMAIL.WElCOME,
                subject: `Welcome`,
                htmlBody: (0, fs_1.readFileSync)('./templates/email.sign-up.template.html', 'utf8'),
            });
            return true;
        }
        catch (err) {
            return false;
        }
    }
    async getWelcome() {
        try {
            const template = await this.awsSESService.getTemplate({
                name: email_enum_constant_1.ENUM_EMAIL.WElCOME,
            });
            return template;
        }
        catch (err) {
            return;
        }
    }
    async deleteWelcome() {
        try {
            await this.awsSESService.deleteTemplate({
                name: email_enum_constant_1.ENUM_EMAIL.WElCOME,
            });
            return true;
        }
        catch (err) {
            return false;
        }
    }
    async sendWelcome({ name, email }) {
        try {
            await this.awsSESService.send({
                templateName: email_enum_constant_1.ENUM_EMAIL.WElCOME,
                recipients: [email],
                sender: this.fromEmail,
                templateData: {
                    name: (0, case_1.title)(name),
                },
            });
            return true;
        }
        catch (err) {
            return false;
        }
    }
    async createTempPassword() {
        try {
            await this.awsSESService.createTemplate({
                name: email_enum_constant_1.ENUM_EMAIL.TEMP_PASSWORD,
                subject: `Temporary Password`,
                htmlBody: (0, fs_1.readFileSync)('./templates/email.temp-password.template.html', 'utf8'),
            });
            return true;
        }
        catch (err) {
            return false;
        }
    }
    async getTempPassword() {
        try {
            const template = await this.awsSESService.getTemplate({
                name: email_enum_constant_1.ENUM_EMAIL.TEMP_PASSWORD,
            });
            return template;
        }
        catch (err) {
            return;
        }
    }
    async deleteTempPassword() {
        try {
            await this.awsSESService.deleteTemplate({
                name: email_enum_constant_1.ENUM_EMAIL.TEMP_PASSWORD,
            });
            return true;
        }
        catch (err) {
            return false;
        }
    }
    async sendTempPassword({ name, email }, { password, expiredAt }) {
        try {
            await this.awsSESService.send({
                templateName: email_enum_constant_1.ENUM_EMAIL.TEMP_PASSWORD,
                recipients: [email],
                sender: this.fromEmail,
                templateData: {
                    name: (0, case_1.title)(name),
                    password,
                    expiredAt: this.helperDateService.format(expiredAt, {
                        format: helper_enum_constant_1.ENUM_HELPER_DATE_FORMAT.FRIENDLY_DATE_TIME,
                    }),
                },
            });
            return true;
        }
        catch (err) {
            return false;
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aws_ses_service_1.AwsSESService,
        helper_date_service_1.HelperDateService,
        config_1.ConfigService])
], EmailService);
//# sourceMappingURL=email.service.js.map