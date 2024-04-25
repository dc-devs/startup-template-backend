import { Injectable } from '@nestjs/common';
import { UserSafe } from './common/entities/user-safe';
import { PrismaService } from '../../services/prisma.service';
// import { encodePassword } from '../../models/users/common/utils/encode-password';
import { FindUniqueUserArgs } from '../@generated/user/find-unique-user.args';
import { FindManyUserArgs } from '../@generated/user/find-many-user.args';
import { CreateOneUserArgs } from '../@generated/user/create-one-user.args';
import { UpdateOneUserArgs } from '../@generated/user/update-one-user.args';
import { DeleteOneUserArgs } from '../@generated/user/delete-one-user.args';

const select = {
	id: true,
	email: true,
	role: true,
	createdAt: true,
	updatedAt: true,
};

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async findOne(
		findUniqueUserArgs: FindUniqueUserArgs,
	): Promise<UserSafe | null> {
		const { where } = findUniqueUserArgs;

		return this.prisma.user.findUnique({
			where,
			select,
		});
	}

	async findAll(findManyUserArgs: FindManyUserArgs): Promise<UserSafe[]> {
		return this.prisma.user.findMany(findManyUserArgs);
	}

	create(createOneUserArgs: CreateOneUserArgs): Promise<UserSafe> {
		// const { email, password } = data;
		// const encodedPassword = encodePassword(password);
		// const emailLowerCase = email.toLowerCase();
		const { data } = createOneUserArgs;

		return this.prisma.user.create({
			// data: {
			// 	email: emailLowerCase,
			// 	password: encodedPassword,
			// },
			data,
			select,
		});
	}

	update(updateOneUserArgs: UpdateOneUserArgs): Promise<UserSafe> {
		const { where, data } = updateOneUserArgs;

		return this.prisma.user.update({
			where,
			data,
			select,
		});
	}

	delete(deleteOneUserArgs: DeleteOneUserArgs): Promise<UserSafe> {
		const { where } = deleteOneUserArgs;

		return this.prisma.user.delete({
			where,
			select,
		});
	}
}
