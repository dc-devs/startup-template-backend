export interface IBasePrismaCrudService<
	Entity,
	WhereUniqueInput,
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
		where: WhereUniqueInput;
		data: UpdateOneInput;
	}): Promise<Entity>;
	delete(deleteOneUserArgs: DeleteUserArgs): Promise<Entity>;
}
