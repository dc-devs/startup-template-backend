import { Injectable } from '@nestjs/common';
import { User } from './entities';
import { FindOneUserInput } from './dto/inputs';
import { PrismaService } from '../../services/prisma.service';

const select = {
	id: true,
	email: true,
	role: true,
	createdAt: true,
	updatedAt: true,
};

// LEFT OFF:
// GraphQl playground nont rerturning one user..
// Lets implemet findAll to esure running as expected..

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

	// async findAll() {
	// 	return [{ id: 1, name: 'David' }];
	// }

	// create(createUserInput: CreateUserInput) {
	// 	return 'This action adds a new user';
	// }

	// update(id: number, updateUserInput: UpdateUserInput) {
	// 	return `This action updates a #${id} user`;
	// }
	// remove(id: number) {
	// 	return `This action removes a #${id} user`;
	// }
}
