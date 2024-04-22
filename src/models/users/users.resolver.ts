import { User } from './entities/user.entity';
import { UsersService } from './users.service';
// import { UserInputError } from 'apollo-server-express';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {
	UpdateUserInput,
	FindOneUserInput,
	FindAllUsersInput,
} from './dto/inputs';

@Resolver(() => User)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => User, { nullable: true })
	findOneUser(
		@Args('findOneUserInput') findOneUserInput: FindOneUserInput,
	): Promise<User | null> {
		return this.usersService.findOne(findOneUserInput);
	}

	@Query(() => [User])
	findAllUsers(
		@Args('findAllUsersInput') findAllUsersInput: FindAllUsersInput,
	): Promise<User[]> {
		return this.usersService.findAll(findAllUsersInput);
	}

	@Mutation(() => User)
	async updateUser(
		@Args('id', { type: () => Int }) id: number,
		@Args('updateUserInput') updateUserInput: UpdateUserInput,
	): Promise<User> {
		console.log(id, updateUserInput);
		try {
			return await this.usersService.update(id, updateUserInput);
		} catch (error) {
			console.log(error);
			// generateGraphQLError(error);
		}
	}

	@Mutation(() => User)
	deleteUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
		return this.usersService.delete(id);
	}
}
