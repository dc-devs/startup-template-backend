import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KolWhereInput } from './kol-where.input';
import { Type } from 'class-transformer';
import { KolOrderByWithRelationInput } from './kol-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { KolWhereUniqueInput } from './kol-where-unique.input';
import { Int } from '@nestjs/graphql';
import { KolScalarFieldEnum } from './kol-scalar-field.enum';

@ArgsType()
export class FindManyKolArgs {

    @Field(() => KolWhereInput, {nullable:true})
    @Type(() => KolWhereInput)
    where?: KolWhereInput;

    @Field(() => [KolOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<KolOrderByWithRelationInput>;

    @Field(() => KolWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<KolWhereUniqueInput, 'id' | 'twitterHandle' | 'telegramHandle'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [KolScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof KolScalarFieldEnum>;
}
