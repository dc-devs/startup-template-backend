import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    /**
     * @Validator.IsEmail
     */
    @Field(() => String, {nullable:false,description:'@Validator.IsEmail'})
    email!: string;

    /**
     * @Validator.IsString
     */
    @HideField()
    password!: string;

    @Field(() => UserRole, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof UserRole;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
