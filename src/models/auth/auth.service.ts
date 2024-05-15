import { compareSync } from 'bcrypt';
import { SessionInput } from './dto/inputs';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UnauthorizedException } from '@nestjs/common';
import { User } from '../common/@generated/user/user.model';
import { UserSafe } from '../users/common/entities/user-safe';
import { Cookie } from '../../base/session-store/common/enums';

interface ILoginRequest {
	user?: User;
	session?: any;
	sessionStore?: any;
}

interface ILoginResponse {
	cookie?: any;
}

interface ILogOutProps {
	userId: number;
	request: ILoginRequest;
	response: ILoginResponse;
}

@Injectable()
export class AuthService {
	constructor(private usersService: UsersService) {}

	async validateUser({ email, password }: SessionInput) {
		try {
			const user = await this.usersService._findOne({ email });
			let validatedUser: UserSafe | null = null;

			if (user) {
				const hasCorrectPassword = compareSync(password, user.password);

				if (user && hasCorrectPassword) {
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const { password, ...restOfUserData } = user;
					validatedUser = restOfUserData;
				}
			}

			return validatedUser;
		} catch (e) {
			throw new UnauthorizedException();
		}
	}

	async login(request: ILoginRequest) {
		const { user } = request;

		if (user && request.session) {
			request.session.userId = user.id;
		} else {
			throw new UnauthorizedException();
		}

		return user;
	}

	logOut({ request, response, userId }: ILogOutProps) {
		request.session.userId = undefined;

		response.cookie(Cookie.NAME, null, {
			httpOnly: true,
			secure: true,
			sameSite: 'none',
			expires: new Date(Cookie.EXPIRED_DATE),
		});

		request.session.destroy();
		request.sessionStore.destroy(userId);

		return true;
	}
}
