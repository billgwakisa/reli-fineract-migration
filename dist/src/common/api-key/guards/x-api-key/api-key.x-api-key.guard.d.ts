import { ExecutionContext } from '@nestjs/common';
import { BadRequestError } from 'passport-headerapikey';
declare const ApiKeyXApiKeyGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class ApiKeyXApiKeyGuard extends ApiKeyXApiKeyGuard_base {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
    handleRequest<IApiKeyPayload = any>(err: Error, apiKey: IApiKeyPayload, info: BadRequestError): IApiKeyPayload;
}
export {};
