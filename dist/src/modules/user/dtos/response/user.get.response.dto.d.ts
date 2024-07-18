import { AwsS3Dto } from 'src/common/aws/dtos/aws.s3.dto';
import { DatabaseIdResponseDto } from 'src/common/database/dtos/response/database.id.response.dto';
import { ENUM_USER_GENDER, ENUM_USER_SIGN_UP_FROM, ENUM_USER_STATUS } from 'src/modules/user/constants/user.enum.constant';
import { UserUpdateMobileNumberRequestDto } from 'src/modules/user/dtos/request/user.update-mobile-number.request.dto';
export declare class UserGetResponseDto extends DatabaseIdResponseDto {
    readonly name: string;
    readonly familyName?: string;
    readonly mobileNumber?: UserUpdateMobileNumberRequestDto;
    readonly email: string;
    readonly role: string;
    readonly password: string;
    readonly passwordExpired: Date;
    readonly passwordCreated: Date;
    readonly passwordAttempt: number;
    readonly signUpDate: Date;
    readonly signUpFrom: ENUM_USER_SIGN_UP_FROM;
    readonly salt: string;
    readonly status: ENUM_USER_STATUS;
    readonly blocked: boolean;
    readonly photo?: AwsS3Dto;
    readonly address?: string;
    readonly gender?: ENUM_USER_GENDER;
    readonly country: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
