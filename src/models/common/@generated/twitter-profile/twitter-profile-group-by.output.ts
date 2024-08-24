import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TwitterProfileCountAggregate } from './twitter-profile-count-aggregate.output';
import { TwitterProfileAvgAggregate } from './twitter-profile-avg-aggregate.output';
import { TwitterProfileSumAggregate } from './twitter-profile-sum-aggregate.output';
import { TwitterProfileMinAggregate } from './twitter-profile-min-aggregate.output';
import { TwitterProfileMaxAggregate } from './twitter-profile-max-aggregate.output';

@ObjectType()
export class TwitterProfileGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    profileId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => String, {nullable:false})
    profileCreatedAt!: string;

    @Field(() => String, {nullable:false})
    pinnedTweetId!: string;

    @Field(() => Boolean, {nullable:false})
    isProtected!: boolean;

    @Field(() => Boolean, {nullable:false})
    isVerified!: boolean;

    @Field(() => Int, {nullable:false})
    followersCount!: number;

    @Field(() => Int, {nullable:false})
    followingCount!: number;

    @Field(() => Int, {nullable:false})
    tweetCount!: number;

    @Field(() => Int, {nullable:false})
    listedCount!: number;

    @Field(() => Int, {nullable:false})
    likeCount!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    urls!: any;

    @Field(() => Int, {nullable:false})
    kolId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
