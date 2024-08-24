import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TwitterProfileMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    profileId?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    profileCreatedAt?: string;

    @Field(() => String, {nullable:true})
    pinnedTweetId?: string;

    @Field(() => Boolean, {nullable:true})
    isProtected?: boolean;

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
