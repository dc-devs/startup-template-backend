import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { KolWhereUniqueInput } from './kol-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneKolArgs {

    @Field(() => KolWhereUniqueInput, {nullable:false})
    @Type(() => KolWhereUniqueInput)
    where!: Prisma.AtLeast<KolWhereUniqueInput, 'id' | 'twitterHandle' | 'telegramHandle'>;
}
