import { Field, ObjectType } from '@nestjs/graphql';
import { UserSafe } from '../../../users/common/entities/user-safe';
import { User } from '../../../common/@generated/user/user.model';

@ObjectType()
export class SessionResponse {
	@Field(() => User, { nullable: true })
	user: UserSafe;

	@Field(() => Boolean, { nullable: true })
	isAuthenticated: boolean;
}
