import { Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserSafe } from './common/entities/user-safe';
import { User } from '../common/@generated/user/user.model';
import { BaseGraphqlCrudResolver } from '../../base/base-graphql-crud-resolver';
import { FindManyUserArgs } from '../common/@generated/user/find-many-user.args';
import { FindUniqueUserArgs } from '../common/@generated/user/find-unique-user.args';
import { UserCreateInput } from '../common/@generated/user/user-create.input';
import { UserUpdateInput } from '../common/@generated/user/user-update.input';
import { DeleteOneUserArgs } from '../common/@generated/user/delete-one-user.args';

@Resolver(() => User)
export class UsersResolver extends BaseGraphqlCrudResolver<
	UserSafe,
	FindUniqueUserArgs,
	FindManyUserArgs,
	UserCreateInput,
	UserUpdateInput,
	DeleteOneUserArgs
>({
	entity: User,
	findUniqueArgs: FindUniqueUserArgs,
	findManyArgs: FindManyUserArgs,
	createOneInput: UserCreateInput,
	updateOneInput: UserUpdateInput,
	deleteOneArgs: DeleteOneUserArgs,
}) {
	constructor(protected usersService: UsersService) {
		super({ baseService: usersService });
	}
}
