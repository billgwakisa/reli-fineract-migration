import { NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response, NextFunction } from 'express';
import { IRequestApp } from 'src/common/request/interfaces/request.interface';
export declare class UrlVersionMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly env;
    private readonly globalPrefix;
    private readonly urlVersionEnable;
    private readonly urlVersionPrefix;
    private readonly urlVersion;
    constructor(configService: ConfigService);
    use(req: IRequestApp, res: Response, next: NextFunction): Promise<void>;
}
