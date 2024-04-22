import { User } from './user.entity';
import { IsString } from 'class-validator';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserWithPassword extends User {
	@IsString()
	@Field({ nullable: true })
	password: string;
}
