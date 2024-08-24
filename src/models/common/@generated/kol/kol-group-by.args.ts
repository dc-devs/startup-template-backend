import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KolWhereInput } from './kol-where.input';
import { Type } from 'class-transformer';
import { KolOrderByWithAggregationInput } from './kol-order-by-with-aggregation.input';
import { KolScalarFieldEnum } from './kol-scalar-field.enum';
import { KolScalarWhereWithAggregatesInput } from './kol-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { KolCountAggregateInput } from './kol-count-aggregate.input';
import { KolAvgAggregateInput } from './kol-avg-aggregate.input';
import { KolSumAggregateInput } from './kol-sum-aggregate.input';
import { KolMinAggregateInput } from './kol-min-aggregate.input';
import { KolMaxAggregateInput } from './kol-max-aggregate.input';

@ArgsType()
export class KolGroupByArgs {

    @Field(() => KolWhereInput, {nullable:true})
    @Type(() => KolWhereInput)
    where?: KolWhereInput;

    @Field(() => [KolOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<KolOrderByWithAggregationInput>;

    @Field(() => [KolScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof KolScalarFieldEnum>;

    @Field(() => KolScalarWhereWithAggregatesInput, {nullable:true})
    having?: KolScalarWhereWithAggregatesInput;

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
