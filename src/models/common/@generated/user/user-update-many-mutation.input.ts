import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserRole } from '../prisma/user-role.enum';

@InputType()
export class UserUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsEmail()
    email?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsString()
    @Validator.MinLength(8)
    password?: string;

    @Field(() => UserRole, {nullable:true})
    role?: keyof typeof UserRole;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
