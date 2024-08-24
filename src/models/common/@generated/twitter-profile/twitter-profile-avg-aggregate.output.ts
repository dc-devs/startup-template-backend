import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TwitterProfileAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    followersCount?: number;

    @Field(() => Float, {nullable:true})
    followingCount?: number;

    @Field(() => Float, {nullable:true})
    tweetCount?: number;

    @Field(() => Float, {nullable:true})
    listedCount?: number;

    @Field(() => Float, {nullable:true})
    likeCount?: number;

    @Field(() => Float, {nullable:true})
    kolId?: number;
}
