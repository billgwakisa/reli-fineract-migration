import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PolicyAbilityFactory } from 'src/common/policy/factories/policy.factory';
export declare class PolicyAbilityGuard implements CanActivate {
    private readonly reflector;
    private readonly policyAbilityFactory;
    constructor(reflector: Reflector, policyAbilityFactory: PolicyAbilityFactory);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
