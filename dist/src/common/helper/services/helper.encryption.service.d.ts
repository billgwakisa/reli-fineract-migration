import { JwtService } from '@nestjs/jwt';
import { IHelperEncryptionService } from 'src/common/helper/interfaces/helper.encryption-service.interface';
import { IHelperJwtOptions, IHelperJwtVerifyOptions } from 'src/common/helper/interfaces/helper.interface';
export declare class HelperEncryptionService implements IHelperEncryptionService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    base64Encrypt(data: string): string;
    base64Decrypt(data: string): string;
    base64Compare(basicToken1: string, basicToken2: string): boolean;
    aes256Encrypt<T = Record<string, any>>(data: T, key: string, iv: string): string;
    aes256Decrypt<T = Record<string, any>>(encrypted: string, key: string, iv: string): T;
    aes256Compare(aes1: string, aes2: string): boolean;
    jwtEncrypt(payload: Record<string, any>, options: IHelperJwtOptions): string;
    jwtDecrypt<T>(token: string): T;
    jwtVerify(token: string, options: IHelperJwtVerifyOptions): boolean;
}
