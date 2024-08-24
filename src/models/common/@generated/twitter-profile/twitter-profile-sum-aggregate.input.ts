import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TwitterProfileSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

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
}
