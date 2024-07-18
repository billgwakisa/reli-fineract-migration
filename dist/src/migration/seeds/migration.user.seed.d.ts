import { AuthService } from 'src/common/auth/services/auth.service';
import { UserService } from 'src/modules/user/services/user.service';
import { RoleService } from 'src/modules/role/services/role.service';
import { CountryService } from 'src/modules/country/services/country.service';
import { UserPasswordHistoryService } from 'src/modules/user/services/user-password-history.service';
import { UserStateHistoryService } from 'src/modules/user/services/user-state-history.service';
export declare class MigrationUserSeed {
    private readonly authService;
    private readonly userService;
    private readonly userPasswordHistoryService;
    private readonly userStateHistoryService;
    private readonly roleService;
    private readonly countryService;
    constructor(authService: AuthService, userService: UserService, userPasswordHistoryService: UserPasswordHistoryService, userStateHistoryService: UserStateHistoryService, roleService: RoleService, countryService: CountryService);
    seeds(): Promise<void>;
    remove(): Promise<void>;
}
