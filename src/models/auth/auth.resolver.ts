import { UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { SessionResponse, LogOutResponse } from './dto/models';
import { Resolver, Mutation, Query, Args, Context } from '@nestjs/graphql';
import generateGraphQLError from '../../graphql/errors/generate-graphql-error';
import { UserCreateInput } from '../common/@generated/user/user-create.input';
import { LogInUser, IsValidUser, IsAuthenticated } from './guards';

@Resolver()
export class AuthResolver {
	constructor(
		private authService: AuthService,
		private usersService: UsersService,
	) {}

	@Mutation(() => SessionResponse)
	@UseGuards(IsValidUser, LogInUser)
	async login(@Context('req') request) {
		const { user } = request;

		return { isAuthenticated: true, user };
	}

	@Mutation(() => SessionResponse)
	async signUp(
		@Context('req') request,
		@Args('data')
		data: UserCreateInput,
	) {
		try {
			const newUser = await this.usersService.create({
				...data,
			});

			const loggedInUser = await this.authService.login({
				...request,
				user: { ...newUser },
			});

			return { isAuthenticated: true, user: loggedInUser };
		} catch (error) {
			generateGraphQLError(error);
		}
	}

	@Query(() => SessionResponse)
	@UseGuards(IsAuthenticated)
	async currentUser(@Context('req') request) {
		const { user } = request;

		return { isAuthenticated: true, user };
	}

	@Mutation(() => LogOutResponse)
	logOut(
		@Context('res') response,
		@Context('req') request,
		@Args('userId') userId: number,
	) {
		try {
			this.authService.logOut({ request, response, userId });

			return { isAuthenticated: false, userId };
		} catch (error) {
			generateGraphQLError(error);
		}
	}
}
