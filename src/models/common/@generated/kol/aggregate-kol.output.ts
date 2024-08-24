import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { KolCountAggregate } from './kol-count-aggregate.output';
import { KolAvgAggregate } from './kol-avg-aggregate.output';
import { KolSumAggregate } from './kol-sum-aggregate.output';
import { KolMinAggregate } from './kol-min-aggregate.output';
import { KolMaxAggregate } from './kol-max-aggregate.output';

@ObjectType()
export class AggregateKol {

    @Field(() => KolCountAggregate, {nullable:true})
    _count?: KolCountAggregate;

    @Field(() => KolAvgAggregate, {nullable:true})
    _avg?: KolAvgAggregate;

    @Field(() => KolSumAggregate, {nullable:true})
    _sum?: KolSumAggregate;

    @Field(() => KolMinAggregate, {nullable:true})
    _min?: KolMinAggregate;

    @Field(() => KolMaxAggregate, {nullable:true})
    _max?: KolMaxAggregate;
}
