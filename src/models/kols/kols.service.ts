import { Injectable } from '@nestjs/common';
import { modelName, select } from './common/constants';
import { Kol } from '../common/@generated/kol/kol.model';
import { PrismaService } from '../../base/services/prisma/prisma.service';
import { KolCreateInput } from '../common/@generated/kol/kol-create.input';
import { KolUpdateInput } from '../common/@generated/kol/kol-update.input';
import { FindManyKolArgs } from '../common/@generated/kol/find-many-kol.args';
import { DeleteOneKolArgs } from '../common/@generated/kol/delete-one-kol.args';
import { FindUniqueKolArgs } from '../common/@generated/kol/find-unique-kol.args';
import { BasePrismaCrudService } from '../../base/app/service/base-prisma-crud-service';
import { KolWhereUniqueInput } from '../common/@generated/kol/kol-where-unique.input';

@Injectable()
export class KolsService extends BasePrismaCrudService<
	Kol,
	KolWhereUniqueInput,
	FindUniqueKolArgs,
	FindManyKolArgs,
	KolCreateInput,
	KolUpdateInput,
	DeleteOneKolArgs
> {
	constructor(protected prisma: PrismaService) {
		super({
			prisma,
			select,
			modelName,
		});
	}
}
