import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TwitterProfileCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    username!: number;

    @Field(() => Int, {nullable:false})
    location!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    imageUrl!: number;

    @Field(() => Int, {nullable:false})
    profileCreatedAt!: number;

    @Field(() => Int, {nullable:false})
    pinnedTweetId!: number;

    @Field(() => Int, {nullable:false})
    isProtected!: number;

    @Field(() => Int, {nullable:false})
    isVerified!: number;

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

    @Field(() => Int, {nullable:false})
    urls!: number;

    @Field(() => Int, {nullable:false})
    kolId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
