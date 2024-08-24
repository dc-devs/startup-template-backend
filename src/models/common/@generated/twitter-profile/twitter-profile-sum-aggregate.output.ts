import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TwitterProfileSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    followersCount?: number;

    @Field(() => Int, {nullable:true})
    followingCount?: number;

    @Field(() => Int, {nullable:true})
    tweetCount?: number;

    @Field(() => Int, {nullable:true})
    listedCount?: number;

    @Field(() => Int, {nullable:true})
    likeCount?: number;

    @Field(() => Int, {nullable:true})
    kolId?: number;
}
