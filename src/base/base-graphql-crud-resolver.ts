import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { Type } from '@nestjs/common';
import { User } from '../models/common/@generated/user/user.model';
import { IBasePrismaCrudService } from './base-prisma-crud-service.inteface';

export function BaseGraphqlCrudResolver<
	Entity,
	FindUniqueArgs,
	FindManyArgs,
	CreateOneArgs,
	UpdateOneArgs,
	DeleteOneArgs,
>({
	findUniqueArgsType,
	findManyArgsType,
	createOneArgsType,
	updateOneArgsType,
	deleteOneArgsType,
}: {
	findUniqueArgsType: Type<FindUniqueArgs>;
	findManyArgsType: Type<FindManyArgs>;
	createOneArgsType: Type<CreateOneArgs>;
	updateOneArgsType: Type<UpdateOneArgs>;
	deleteOneArgsType: Type<DeleteOneArgs>;
}) {
	@Resolver({ isAbstract: true })
	abstract class BaseGraphqlCrudResolverAbstract {
		baseService: IBasePrismaCrudService<
			Entity,
			FindUniqueArgs,
			FindManyArgs,
			CreateOneArgs,
			UpdateOneArgs,
			DeleteOneArgs
		>;

		constructor({
			baseService,
		}: {
			baseService: IBasePrismaCrudService<
				Entity,
				FindUniqueArgs,
				FindManyArgs,
				CreateOneArgs,
				UpdateOneArgs,
				DeleteOneArgs
			>;
		}) {
			this.baseService = baseService;
		}

		@Query(() => User, {
			name: `findOneUser`,
			nullable: true,
		})
		findOne(
			@Args({ type: () => findUniqueArgsType })
			findUniqueArgs: FindUniqueArgs,
		): Promise<Entity | null> {
			return this.baseService.findOne(findUniqueArgs);
		}

		@Query(() => [User], { name: `findAllUsers` })
		findAll(
			@Args({ type: () => findManyArgsType })
			findManyArgs: FindManyArgs,
		): Promise<Entity[]> {
			return this.baseService.findAll(findManyArgs);
		}

		@Mutation(() => User, { name: `createUser` })
		async create(
			@Args({ type: () => createOneArgsType })
			createOneArgs: CreateOneArgs,
		): Promise<Entity> {
			return await this.baseService.create(createOneArgs);
		}

		@Mutation(() => User, { name: `updateUser` })
		async update(
			@Args({ type: () => updateOneArgsType })
			updateOneArgs: UpdateOneArgs,
		): Promise<Entity> {
			return await this.baseService.update(updateOneArgs);
		}

		@Mutation(() => User, { name: `deleteUser` })
		async delete(
			@Args({ type: () => deleteOneArgsType })
			deleteOneArgs: DeleteOneArgs,
		): Promise<Entity> {
			return await this.baseService.delete(deleteOneArgs);
		}
	}

	return BaseGraphqlCrudResolverAbstract;
}
