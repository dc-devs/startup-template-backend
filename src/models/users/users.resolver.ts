// import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { FindOneUserInput } from './dto/inputs';

@Resolver(() => User)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => User, { nullable: true })
	findOneUser(
		@Args('findOneUserInput') findOneUserInput: FindOneUserInput,
	): Promise<User | null> {
		return this.usersService.findOne(findOneUserInput);
	}

	// @Mutation(() => User)
	// createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
	// 	return this.usersService.create(createUserInput);
	// }

	// @Query(() => [User], { name: 'users' })
	// findAll() {
	// 	return this.usersService.findAll();
	// }

	// @Mutation(() => User)
	// updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
	// 	return this.usersService.update(updateUserInput.id, updateUserInput);
	// }

	// @Mutation(() => User)
	// removeUser(@Args('id', { type: () => Int }) id: number) {
	// 	return this.usersService.remove(id);
	// }
}
