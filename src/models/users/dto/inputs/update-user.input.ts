import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
	@IsEmail()
	@IsOptional()
	@Field({ nullable: true })
	email?: string;
}
