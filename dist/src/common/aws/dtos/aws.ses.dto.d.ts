export declare class AwsSESCreateTemplateDto {
    name: string;
    htmlBody?: string;
    subject: string;
    plainTextBody?: string;
}
export declare class AwsSESUpdateTemplateDto extends AwsSESCreateTemplateDto {
}
export declare class AwsSESGetTemplateDto {
    name: string;
}
export declare class AwsSESSendDto<T> {
    templateName: string;
    templateData?: T;
    sender: string;
    replyTo?: string;
    recipients: string[];
    cc?: string[];
    bcc?: string[];
}
declare const AwsSESSendBulkRecipientsDto_base: import("@nestjs/common").Type<Pick<AwsSESSendDto<unknown>, "templateData">>;
export declare class AwsSESSendBulkRecipientsDto extends AwsSESSendBulkRecipientsDto_base {
    recipient: string;
}
declare const AwsSESSendBulkDto_base: import("@nestjs/common").Type<Omit<AwsSESSendDto<unknown>, "templateData" | "recipients">>;
export declare class AwsSESSendBulkDto extends AwsSESSendBulkDto_base {
    recipients: AwsSESSendBulkRecipientsDto[];
}
export {};
