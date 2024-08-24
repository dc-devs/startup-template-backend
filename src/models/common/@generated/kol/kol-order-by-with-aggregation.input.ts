import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { KolCountOrderByAggregateInput } from './kol-count-order-by-aggregate.input';
import { KolAvgOrderByAggregateInput } from './kol-avg-order-by-aggregate.input';
import { KolMaxOrderByAggregateInput } from './kol-max-order-by-aggregate.input';
import { KolMinOrderByAggregateInput } from './kol-min-order-by-aggregate.input';
import { KolSumOrderByAggregateInput } from './kol-sum-order-by-aggregate.input';

@InputType()
export class KolOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    twitterHandle?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    telegramHandle?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => KolCountOrderByAggregateInput, {nullable:true})
    _count?: KolCountOrderByAggregateInput;

    @Field(() => KolAvgOrderByAggregateInput, {nullable:true})
    _avg?: KolAvgOrderByAggregateInput;

    @Field(() => KolMaxOrderByAggregateInput, {nullable:true})
    _max?: KolMaxOrderByAggregateInput;

    @Field(() => KolMinOrderByAggregateInput, {nullable:true})
    _min?: KolMinOrderByAggregateInput;

    @Field(() => KolSumOrderByAggregateInput, {nullable:true})
    _sum?: KolSumOrderByAggregateInput;
}
