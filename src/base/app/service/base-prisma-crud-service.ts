import { IBasePrismaCrudService } from './base-prisma-crud-service.inteface';
import { PrismaService } from '../../services/prisma/prisma.service';

export class BasePrismaCrudService<
	Entity,
	WhereUniqueInput,
	FindUniqueArgs,
	FindManyArgs,
	CreateOneInput,
	UpdateOneInput,
	DeleteOneArgs,
> implements
		IBasePrismaCrudService<
			Entity,
			WhereUniqueInput,
			FindUniqueArgs,
			FindManyArgs,
			CreateOneInput,
			UpdateOneInput,
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
		return this.prisma?.[this.modelName].findMany({
			...findManyArgs,
			select: this.select,
		});
	}

	create(data: CreateOneInput): Promise<Entity> {
		return this.prisma?.[this.modelName].create({
			data,
			select: this.select,
		});
	}

	update({
		where,
		data,
	}: {
		where: WhereUniqueInput;
		data: UpdateOneInput;
	}): Promise<Entity> {
		return this.prisma?.[this.modelName].update({
			where,
			data,
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
