import { UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SessionInput } from './dto/inputs';
import { UsersService } from '../users/users.service';
import { SessionResponse, LogOutResponse } from './dto/models';
import { Resolver, Mutation, Query, Args, Context } from '@nestjs/graphql';
import generateGraphQLError from '../../base/services/graphql/errors/generate-graphql-error';
import { UserCreateInput } from '../common/@generated/user/user-create.input';
import { SignInUser, IsValidUser, IsAuthenticated } from './guards';

@Resolver()
export class AuthResolver {
	constructor(
		private authService: AuthService,
		private usersService: UsersService,
	) {}

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

			const loggedInUser = await this.authService.signIn({
				...request,
				user: { ...newUser },
			});

			return { isAuthenticated: true, user: loggedInUser };
		} catch (error) {
			generateGraphQLError(error);
		}
	}

	@Mutation(() => LogOutResponse)
	signOut(
		@Context('res') response,
		@Context('req') request,
		@Args('userId') userId: number,
	) {
		try {
			this.authService.signOut({ request, response, userId });

			return { isAuthenticated: false, userId };
		} catch (error) {
			generateGraphQLError(error);
		}
	}

	@Mutation(() => SessionResponse)
	@UseGuards(IsValidUser, SignInUser)
	async signIn(
		@Context('req') request,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		@Args('sessionInput') _sessionInput: SessionInput,
	) {
		const { user } = request;

		return { isAuthenticated: true, user };
	}

	@Query(() => SessionResponse)
	@UseGuards(IsAuthenticated)
	async currentUser(@Context('req') request) {
		const { user } = request;

		return { isAuthenticated: true, user };
	}
}
