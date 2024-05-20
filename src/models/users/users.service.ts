import { Injectable } from '@nestjs/common';
import { UserSafe } from './common/entities/user-safe';
import { modelName, select } from './common/constants';
import { PrismaService } from '../../base/services/prisma/prisma.service';
import { User as UserUnsafe } from '../common/@generated/user/user.model';
import { UserCreateInput } from '../common/@generated/user/user-create.input';
import { UserUpdateInput } from '../common/@generated/user/user-update.input';
import { encodePassword } from '../../models/users/common/utils/encode-password';
import { FindManyUserArgs } from '../common/@generated/user/find-many-user.args';
import { DeleteOneUserArgs } from '../common/@generated/user/delete-one-user.args';
import { FindUniqueUserArgs } from '../common/@generated/user/find-unique-user.args';
import { BasePrismaCrudService } from '../../base/app/service/base-prisma-crud-service';
import { UserWhereUniqueInput } from '../common/@generated/user/user-where-unique.input';

@Injectable()
export class UsersService extends BasePrismaCrudService<
	UserSafe,
	UserWhereUniqueInput,
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

	async create(data: UserCreateInput): Promise<UserSafe> {
		const { email, password } = data;
		const encodedPassword = encodePassword(password);
		const emailLowerCase = email.toLowerCase();

		return await this.prisma.user.create({
			data: {
				email: emailLowerCase,
				password: encodedPassword,
			},
			select,
		});
	}

	async _findOne(
		findOneInput: UserWhereUniqueInput,
	): Promise<UserUnsafe | null> {
		const { id, email } = findOneInput;

		return await this.prisma.user.findUnique({
			where: { id, email },
			select: { ...select, password: true },
		});
	}
}
