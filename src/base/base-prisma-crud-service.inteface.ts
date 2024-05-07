export interface IBasePrismaCrudService<
	Entity,
	FindUniqueArgs,
	FindManyArgs,
	CreateOneInput,
	UpdateOneInput,
	DeleteUserArgs,
> {
	findOne(findUniqueArgs: FindUniqueArgs): Promise<Entity | null>;
	findAll(findManyArgs: FindManyArgs): Promise<Entity[]>;
	create(data: CreateOneInput): Promise<Entity>;
	update({
		where,
		data,
	}: {
		where: number;
		data: UpdateOneInput;
	}): Promise<Entity>;
	delete(deleteOneUserArgs: DeleteUserArgs): Promise<Entity>;
}
