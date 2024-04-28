export interface IBasePrismaCrudService<
	Entity,
	FindUniqueArgs,
	FindManyArgs,
	CreateOneArgs,
	UpdateOneArgs,
	DeleteUserArgs,
> {
	findOne(findUniqueArgs: FindUniqueArgs): Promise<Entity | null>;
	findAll(findManyArgs: FindManyArgs): Promise<Entity[]>;
	create(createOneArgs: CreateOneArgs): Promise<Entity>;
	update(updateOneArgs: UpdateOneArgs): Promise<Entity>;
	delete(deleteOneUserArgs: DeleteUserArgs): Promise<Entity>;
}
