import { Injectable } from '@nestjs/common';
import { UserSafe } from './common/entities/user-safe';
import { PrismaService } from '../../services/prisma.service';
import { encodePassword } from '../../models/users/common/utils/encode-password';
import { FindUniqueUserArgs } from '../@generated/user/find-unique-user.args';
import { FindManyUserArgs } from '../@generated/user/find-many-user.args';
import { CreateOneUserArgs } from '../@generated/user/create-one-user.args';
import { UpdateOneUserArgs } from '../@generated/user/update-one-user.args';
import { DeleteOneUserArgs } from '../@generated/user/delete-one-user.args';
import { BasePrismaCrudService } from 'src/base/base-pisma-crud-service';

const select = {
	id: true,
	email: true,
	role: true,
	createdAt: true,
	updatedAt: true,
};

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
		const modelName = 'user';

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
