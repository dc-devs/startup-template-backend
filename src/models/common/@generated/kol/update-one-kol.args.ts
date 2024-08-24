import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KolUpdateInput } from './kol-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { KolWhereUniqueInput } from './kol-where-unique.input';

@ArgsType()
export class UpdateOneKolArgs {

    @Field(() => KolUpdateInput, {nullable:false})
    @Type(() => KolUpdateInput)
    data!: KolUpdateInput;

    @Field(() => KolWhereUniqueInput, {nullable:false})
    @Type(() => KolWhereUniqueInput)
    where!: Prisma.AtLeast<KolWhereUniqueInput, 'id' | 'twitterHandle' | 'telegramHandle'>;
}
