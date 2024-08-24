import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KolWhereInput } from './kol-where.input';
import { Type } from 'class-transformer';
import { KolOrderByWithRelationInput } from './kol-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { KolWhereUniqueInput } from './kol-where-unique.input';
import { Int } from '@nestjs/graphql';
import { KolCountAggregateInput } from './kol-count-aggregate.input';
import { KolAvgAggregateInput } from './kol-avg-aggregate.input';
import { KolSumAggregateInput } from './kol-sum-aggregate.input';
import { KolMinAggregateInput } from './kol-min-aggregate.input';
import { KolMaxAggregateInput } from './kol-max-aggregate.input';

@ArgsType()
export class KolAggregateArgs {

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

    @Field(() => KolCountAggregateInput, {nullable:true})
    _count?: KolCountAggregateInput;

    @Field(() => KolAvgAggregateInput, {nullable:true})
    _avg?: KolAvgAggregateInput;

    @Field(() => KolSumAggregateInput, {nullable:true})
    _sum?: KolSumAggregateInput;

    @Field(() => KolMinAggregateInput, {nullable:true})
    _min?: KolMinAggregateInput;

    @Field(() => KolMaxAggregateInput, {nullable:true})
    _max?: KolMaxAggregateInput;
}
