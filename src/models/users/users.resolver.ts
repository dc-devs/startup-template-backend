import { UsersService } from './users.service';
import { User } from '../common/@generated/user/user.model';
import { UserSafe } from './common/entities/user-safe';
import { Resolver /*,Query, Mutation, Args*/ } from '@nestjs/graphql';
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
	findUniqueArgsType: FindUniqueUserArgs,
	findManyArgsType: FindManyUserArgs,
	createOneArgsType: CreateOneUserArgs,
	updateOneArgsType: UpdateOneUserArgs,
	deleteOneArgsType: DeleteOneUserArgs,
}) {
	constructor(protected usersService: UsersService) {
		super({ baseService: usersService });
	}
}
