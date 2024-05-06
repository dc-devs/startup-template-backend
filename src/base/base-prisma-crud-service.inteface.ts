export interface IBasePrismaCrudService<
	Entity,
	FindUniqueArgs,
	FindManyArgs,
	CreateOneInput,
	UpdateOneArgs,
	DeleteUserArgs,
> {
	findOne(findUniqueArgs: FindUniqueArgs): Promise<Entity | null>;
	findAll(findManyArgs: FindManyArgs): Promise<Entity[]>;
	create(data: CreateOneInput): Promise<Entity>;
	update(updateOneArgs: UpdateOneArgs): Promise<Entity>;
	delete(deleteOneUserArgs: DeleteUserArgs): Promise<Entity>;
}
