import { IBasePrismaCrudService } from './base-prisma-crud-service.inteface';
import { PrismaService } from '../services/prisma.service';

export class BasePrismaCrudService<
	Entity,
	FindUniqueArgs,
	FindManyArgs,
	CreateOneArgs,
	UpdateOneArgs,
	DeleteOneArgs,
> implements
		IBasePrismaCrudService<
			Entity,
			FindUniqueArgs,
			FindManyArgs,
			CreateOneArgs,
			UpdateOneArgs,
			DeleteOneArgs
		>
{
	protected modelName: string;
	protected prisma: PrismaService;
	protected select: Record<string, boolean>;

	constructor({ prisma, select, modelName }) {
		this.prisma = prisma;
		this.select = select;
		this.modelName = modelName;
	}

	findOne(findUniqueArgs: FindUniqueArgs): Promise<Entity | null> {
		return this.prisma?.[this.modelName].findUnique({
			...findUniqueArgs,
			select: this.select,
		});
	}

	findAll(findManyArgs: FindManyArgs): Promise<Entity[]> {
		return this.prisma?.[this.modelName].findMany(findManyArgs);
	}

	create(createOneArgs: CreateOneArgs): Promise<Entity> {
		return this.prisma?.[this.modelName].create({
			...createOneArgs,
			select: this.select,
		});
	}

	update(updateOneArgs: UpdateOneArgs): Promise<Entity> {
		return this.prisma?.[this.modelName].update({
			...updateOneArgs,
			select: this.select,
		});
	}

	delete(deleteOneArgs: DeleteOneArgs): Promise<Entity> {
		return this.prisma?.[this.modelName].delete({
			...deleteOneArgs,
			select: this.select,
		});
	}
}
