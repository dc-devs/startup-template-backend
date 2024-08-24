import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TwitterProfileCountAggregate } from './twitter-profile-count-aggregate.output';
import { TwitterProfileAvgAggregate } from './twitter-profile-avg-aggregate.output';
import { TwitterProfileSumAggregate } from './twitter-profile-sum-aggregate.output';
import { TwitterProfileMinAggregate } from './twitter-profile-min-aggregate.output';
import { TwitterProfileMaxAggregate } from './twitter-profile-max-aggregate.output';

@ObjectType()
export class AggregateTwitterProfile {

    @Field(() => TwitterProfileCountAggregate, {nullable:true})
    _count?: TwitterProfileCountAggregate;

    @Field(() => TwitterProfileAvgAggregate, {nullable:true})
    _avg?: TwitterProfileAvgAggregate;

    @Field(() => TwitterProfileSumAggregate, {nullable:true})
    _sum?: TwitterProfileSumAggregate;

    @Field(() => TwitterProfileMinAggregate, {nullable:true})
    _min?: TwitterProfileMinAggregate;

    @Field(() => TwitterProfileMaxAggregate, {nullable:true})
    _max?: TwitterProfileMaxAggregate;
}
