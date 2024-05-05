import { Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserSafe } from './common/entities/user-safe';
import { User } from '../common/@generated/user/user.model';
import { BaseGraphqlCrudResolver } from '../../base/base-graphql-crud-resolver';
import { FindManyUserArgs } from '../common/@generated/user/find-many-user.args';
import { FindUniqueUserArgs } from '../common/@generated/user/find-unique-user.args';
import { CreateOneUserArgs } from '../common/@generated/user/create-one-user.args';
import { UpdateOneUserArgs } from '../common/@generated/user/update-one-user.args';
import { DeleteOneUserArgs } from '../common/@generated/user/delete-one-user.args';

@Resolver(() => User)
export class UsersResolver extends BaseGraphqlCrudResolver<
	UserSafe,
	FindUniqueUserArgs,
	FindManyUserArgs,
	CreateOneUserArgs,
	UpdateOneUserArgs,
	DeleteOneUserArgs
>({
	entity: User,
	findUniqueArgs: FindUniqueUserArgs,
	findManyArgs: FindManyUserArgs,
	createOneArgs: CreateOneUserArgs,
	updateOneArgs: UpdateOneUserArgs,
	deleteOneArgs: DeleteOneUserArgs,
}) {
	constructor(protected usersService: UsersService) {
		super({ baseService: usersService });
	}
}
