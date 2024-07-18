import { MiddlewareConsumer, NestModule } from '@nestjs/common';
export declare class AppMiddlewareModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
