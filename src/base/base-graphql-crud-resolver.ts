import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { Type } from '@nestjs/common';
import { IBasePrismaCrudService } from './base-prisma-crud-service.inteface';

export function BaseGraphqlCrudResolver<
	Entity,
	FindUniqueArgs,
	FindManyArgs,
	CreateOneInput,
	UpdateOneArgs,
	DeleteOneArgs,
>({
	entity,
	findUniqueArgs,
	findManyArgs,
	createOneInput,
	updateOneArgs,
	deleteOneArgs,
}: {
	entity: Type<Entity>;
	findUniqueArgs: Type<FindUniqueArgs>;
	findManyArgs: Type<FindManyArgs>;
	createOneInput: Type<CreateOneInput>;
	updateOneArgs: Type<UpdateOneArgs>;
	deleteOneArgs: Type<DeleteOneArgs>;
}) {
	@Resolver({ isAbstract: true })
	abstract class BaseGraphqlCrudResolverAbstract {
		baseService: IBasePrismaCrudService<
			Entity,
			FindUniqueArgs,
			FindManyArgs,
			CreateOneInput,
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
				CreateOneInput,
				UpdateOneArgs,
				DeleteOneArgs
			>;
		}) {
			this.baseService = baseService;
		}

		@Query(() => entity, {
			name: `findOne${entity.name}`,
			nullable: true,
		})
		findOne(
			@Args({ type: () => findUniqueArgs })
			args: FindUniqueArgs,
		): Promise<Entity | null> {
			return this.baseService.findOne(args);
		}

		@Query(() => [entity], { name: `findAll${entity.name}s` })
		findAll(
			@Args({ type: () => findManyArgs })
			args: FindManyArgs,
		): Promise<Entity[]> {
			return this.baseService.findAll(args);
		}

		@Mutation(() => entity, { name: `create${entity.name}` })
		async create(
			@Args('data', { type: () => createOneInput })
			data: // @ts-expect-error: Valid Type NestJs
			createOneInput,
		): Promise<Entity> {
			return await this.baseService.create(data);
		}

		@Mutation(() => entity, { name: `update${entity.name}` })
		async update(
			@Args({ type: () => updateOneArgs })
			args: UpdateOneArgs,
		): Promise<Entity> {
			return await this.baseService.update(args);
		}

		@Mutation(() => entity, { name: `delete${entity.name}` })
		async delete(
			@Args({ type: () => deleteOneArgs })
			args: DeleteOneArgs,
		): Promise<Entity> {
			return await this.baseService.delete(args);
		}
	}

	return BaseGraphqlCrudResolverAbstract;
}
