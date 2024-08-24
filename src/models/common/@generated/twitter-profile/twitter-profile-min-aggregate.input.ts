import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TwitterProfileMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    profileId?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    username?: true;

    @Field(() => Boolean, {nullable:true})
    location?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    imageUrl?: true;

    @Field(() => Boolean, {nullable:true})
    profileCreatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    pinnedTweetId?: true;

    @Field(() => Boolean, {nullable:true})
    isProtected?: true;

    @Field(() => Boolean, {nullable:true})
    isVerified?: true;

    @Field(() => Boolean, {nullable:true})
    followersCount?: true;

    @Field(() => Boolean, {nullable:true})
    followingCount?: true;

    @Field(() => Boolean, {nullable:true})
    tweetCount?: true;

    @Field(() => Boolean, {nullable:true})
    listedCount?: true;

    @Field(() => Boolean, {nullable:true})
    likeCount?: true;

    @Field(() => Boolean, {nullable:true})
    kolId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
