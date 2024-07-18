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
exports.AwsSESService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_ses_1 = require("@aws-sdk/client-ses");
let AwsSESService = class AwsSESService {
    constructor(configService) {
        this.configService = configService;
        this.sesClient = new client_ses_1.SESClient({
            credentials: {
                accessKeyId: this.configService.get('aws.ses.credential.key'),
                secretAccessKey: this.configService.get('aws.ses.credential.secret'),
            },
            region: this.configService.get('aws.ses.region'),
        });
    }
    async listTemplates(nextToken) {
        const command = new client_ses_1.ListTemplatesCommand({
            MaxItems: 20,
            NextToken: nextToken,
        });
        try {
            const listTemplate = await this.sesClient.send(command);
            return listTemplate;
        }
        catch (err) {
            throw err;
        }
    }
    async getTemplate({ name, }) {
        const command = new client_ses_1.GetTemplateCommand({
            TemplateName: name,
        });
        try {
            const getTemplate = await this.sesClient.send(command);
            return getTemplate;
        }
        catch (err) {
            throw err;
        }
    }
    async createTemplate({ name, subject, htmlBody, plainTextBody, }) {
        if (!htmlBody && !plainTextBody) {
            throw new Error('body is null');
        }
        const command = new client_ses_1.CreateTemplateCommand({
            Template: {
                TemplateName: name,
                SubjectPart: subject,
                HtmlPart: htmlBody,
                TextPart: plainTextBody,
            },
        });
        try {
            const create = await this.sesClient.send(command);
            return create;
        }
        catch (err) {
            throw err;
        }
    }
    async updateTemplate({ name, subject, htmlBody, plainTextBody, }) {
        if (!htmlBody && !plainTextBody) {
            throw new Error('body is null');
        }
        const command = new client_ses_1.UpdateTemplateCommand({
            Template: {
                TemplateName: name,
                SubjectPart: subject,
                HtmlPart: htmlBody,
                TextPart: plainTextBody,
            },
        });
        try {
            const update = await this.sesClient.send(command);
            return update;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteTemplate({ name, }) {
        const command = new client_ses_1.DeleteTemplateCommand({
            TemplateName: name,
        });
        try {
            const del = await this.sesClient.send(command);
            return del;
        }
        catch (err) {
            throw err;
        }
    }
    async send({ recipients, sender, replyTo, bcc, cc, templateName, templateData, }) {
        const command = new client_ses_1.SendTemplatedEmailCommand({
            Template: templateName,
            Destination: {
                ToAddresses: recipients,
                BccAddresses: bcc ?? [],
                CcAddresses: cc ?? [],
            },
            Source: sender,
            TemplateData: JSON.stringify(templateData ?? ''),
            ReplyToAddresses: [replyTo ?? sender],
        });
        try {
            const sendWithTemplate = await this.sesClient.send(command);
            return sendWithTemplate;
        }
        catch (err) {
            throw err;
        }
    }
    async sendBulk({ recipients, sender, replyTo, bcc, cc, templateName, }) {
        const command = new client_ses_1.SendBulkTemplatedEmailCommand({
            Template: templateName,
            Destinations: recipients.map(e => ({
                Destination: {
                    ToAddresses: [e.recipient],
                    BccAddresses: bcc ?? [],
                    CcAddresses: cc ?? [],
                },
                ReplacementTemplateData: JSON.stringify(e.templateData ?? ''),
            })),
            Source: sender,
            ReplyToAddresses: [replyTo ?? sender],
        });
        try {
            const sendWithTemplate = await this.sesClient.send(command);
            return sendWithTemplate;
        }
        catch (err) {
            throw err;
        }
    }
};
exports.AwsSESService = AwsSESService;
exports.AwsSESService = AwsSESService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AwsSESService);
//# sourceMappingURL=aws.ses.service.js.map