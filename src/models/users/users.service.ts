import { Injectable } from '@nestjs/common';
import { UserSafe } from './common/entities/user-safe';
import { modelName, select } from './common/constants';
import { PrismaService } from '../../services/prisma.service';
import { BasePrismaCrudService } from 'src/base/base-prisma-crud-service';
import { encodePassword } from '../../models/users/common/utils/encode-password';
import { FindManyUserArgs } from '../common/@generated/user/find-many-user.args';
import { CreateOneUserArgs } from '../common/@generated/user/create-one-user.args';
import { UpdateOneUserArgs } from '../common/@generated/user/update-one-user.args';
import { DeleteOneUserArgs } from '../common/@generated/user/delete-one-user.args';
import { FindUniqueUserArgs } from '../common/@generated/user/find-unique-user.args';

@Injectable()
export class UsersService extends BasePrismaCrudService<
	UserSafe,
	FindUniqueUserArgs,
	FindManyUserArgs,
	CreateOneUserArgs,
	UpdateOneUserArgs,
	DeleteOneUserArgs
> {
	constructor(protected prisma: PrismaService) {
		super({
			prisma,
			select,
			modelName,
		});
	}

	create(createOneUserArgs: CreateOneUserArgs): Promise<UserSafe> {
		const { data } = createOneUserArgs;
		const { email, password } = data;
		const encodedPassword = encodePassword(password);
		const emailLowerCase = email.toLowerCase();

		return this.prisma.user.create({
			data: {
				email: emailLowerCase,
				password: encodedPassword,
			},
			select,
		});
	}
}
