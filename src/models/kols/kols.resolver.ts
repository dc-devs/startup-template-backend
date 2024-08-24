import { Resolver } from '@nestjs/graphql';
import { KolsService } from './kols.service';
import { Kol } from '../common/@generated/kol/kol.model';
import { KolUpdateInput } from '../common/@generated/kol/kol-update.input';
import { KolCreateInput } from '../common/@generated/kol/kol-create.input';
import { BaseGraphqlCrudResolver } from '../../base/app/resolver/base-graphql-crud-resolver';
import { FindManyKolArgs } from '../common/@generated/kol/find-many-kol.args';
import { KolWhereUniqueInput } from '../common/@generated/kol/kol-where-unique.input';
import { DeleteOneKolArgs } from '../common/@generated/kol/delete-one-kol.args';
import { FindUniqueKolArgs } from '../common/@generated/kol/find-unique-kol.args';

@Resolver(() => Kol)
export class KolsResolver extends BaseGraphqlCrudResolver<
	Kol,
	KolWhereUniqueInput,
	FindUniqueKolArgs,
	FindManyKolArgs,
	KolCreateInput,
	KolUpdateInput,
	DeleteOneKolArgs
>({
	entity: Kol,
	whereUniqueInput: KolWhereUniqueInput,
	findUniqueArgs: FindUniqueKolArgs,
	findManyArgs: FindManyKolArgs,
	createOneInput: KolCreateInput,
	updateOneInput: KolUpdateInput,
	deleteOneArgs: DeleteOneKolArgs,
}) {
	constructor(protected usersService: KolsService) {
		super({ baseService: usersService });
	}
}
