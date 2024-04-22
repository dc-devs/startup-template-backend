import { Injectable } from '@nestjs/common';
import { User } from './entities';
import { PrismaService } from '../../services/prisma.service';
import { encodePassword } from '../../models/users/common/utils/encode-password';
import {
	UpdateUserInput,
	FindOneUserInput,
	FindAllUsersInput,
	CreateUserEmailInput,
} from './dto/inputs';

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

	async findOne(findOneUserInput: FindOneUserInput): Promise<User | null> {
		const { id, email } = findOneUserInput;

		return this.prisma.user.findUnique({
			where: { id, email },
			select,
		});
	}

	async findAll(findAllUsersInput: FindAllUsersInput): Promise<User[]> {
		const { skip, cursor, take, orderBy, where } = findAllUsersInput;
		return this.prisma.user.findMany({
			skip,
			take,
			cursor,
			where,
			orderBy,
			select,
		});
	}

	create(createUserEmailInput: CreateUserEmailInput): Promise<User> {
		const { email, password } = createUserEmailInput;
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

	update(id: number, data: UpdateUserInput): Promise<User> {
		return this.prisma.user.update({
			where: {
				id,
			},
			data,
			select,
		});
	}

	delete(id: number): Promise<User> {
		return this.prisma.user.delete({
			where: {
				id,
			},
			select,
		});
	}
}
