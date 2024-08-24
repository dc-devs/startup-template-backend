import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { KolWhereUniqueInput } from './kol-where-unique.input';
import { Type } from 'class-transformer';
import { KolCreateInput } from './kol-create.input';
import { KolUpdateInput } from './kol-update.input';

@ArgsType()
export class UpsertOneKolArgs {

    @Field(() => KolWhereUniqueInput, {nullable:false})
    @Type(() => KolWhereUniqueInput)
    where!: Prisma.AtLeast<KolWhereUniqueInput, 'id' | 'twitterHandle' | 'telegramHandle'>;

    @Field(() => KolCreateInput, {nullable:false})
    @Type(() => KolCreateInput)
    create!: KolCreateInput;

    @Field(() => KolUpdateInput, {nullable:false})
    @Type(() => KolUpdateInput)
    update!: KolUpdateInput;
}
