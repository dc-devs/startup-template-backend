import { UsersService } from './users.service';
import { User } from '../@generated/user/user.model';
import { UserSafe } from './common/entities/user-safe';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FindManyUserArgs } from '../@generated/user/find-many-user.args';
import { FindUniqueUserArgs } from '../@generated/user/find-unique-user.args';
import { CreateOneUserArgs } from '../@generated/user/create-one-user.args';

@Resolver(() => User)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => User, { nullable: true })
	findOneUser(
		@Args()
		findUniqueUserArgs: FindUniqueUserArgs,
	): Promise<UserSafe | null> {
		return this.usersService.findOne(findUniqueUserArgs);
	}

	@Query(() => [User])
	findAllUsers(@Args() args: FindManyUserArgs): Promise<UserSafe[]> {
		return this.usersService.findAll(args);
	}

	@Mutation(() => User)
	async createUser(
		@Args()
		createOneUserArgs: CreateOneUserArgs,
	): Promise<UserSafe> {
		try {
			const newUser = await this.usersService.create(createOneUserArgs);
			// const loggedInUser = await this.authService.login({
			// 	...request,
			// 	user: { ...newUser },
			// });

			// return { isAuthenticated: true, user: newUser };

			return newUser;
		} catch (error) {
			// generateGraphQLError(error);
		}
	}

	// @Mutation(() => User)
	// async updateUser(
	// 	@Args('updateOneUserArgs') updateOneUserArgs: UpdateOneUserArgs,
	// ): Promise<User> {
	// 	try {
	// 		return await this.usersService.update(updateOneUserArgs);
	// 	} catch (error) {
	// 		console.log(error);
	// 		// generateGraphQLError(error);
	// 	}
	// }

	// @Mutation(() => User)
	// deleteUser(
	// 	@Args('deleteOneUserArgs') deleteOneUserArgs: DeleteOneUserArgs,
	// ): Promise<User> {
	// 	return this.usersService.delete(deleteOneUserArgs);
	// }
}
