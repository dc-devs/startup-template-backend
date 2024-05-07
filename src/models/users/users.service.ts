import { Injectable } from '@nestjs/common';
import { UserSafe } from './common/entities/user-safe';
import { modelName, select } from './common/constants';
import { PrismaService } from '../../services/prisma.service';
import { BasePrismaCrudService } from 'src/base/base-prisma-crud-service';
import { encodePassword } from '../../models/users/common/utils/encode-password';
import { FindManyUserArgs } from '../common/@generated/user/find-many-user.args';
import { UserCreateInput } from '../common/@generated/user/user-create.input';
import { UserUpdateInput } from '../common/@generated/user/user-update.input';
import { DeleteOneUserArgs } from '../common/@generated/user/delete-one-user.args';
import { FindUniqueUserArgs } from '../common/@generated/user/find-unique-user.args';

@Injectable()
export class UsersService extends BasePrismaCrudService<
	UserSafe,
	FindUniqueUserArgs,
	FindManyUserArgs,
	UserCreateInput,
	UserUpdateInput,
	DeleteOneUserArgs
> {
	constructor(protected prisma: PrismaService) {
		super({
			prisma,
			select,
			modelName,
		});
	}

	create(data: UserCreateInput): Promise<UserSafe> {
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
