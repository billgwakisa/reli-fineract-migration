import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from 'src/common/auth/services/auth.service';
export declare class AuthSocialGoogleGuard implements CanActivate {
    private readonly authService;
    constructor(authService: AuthService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
