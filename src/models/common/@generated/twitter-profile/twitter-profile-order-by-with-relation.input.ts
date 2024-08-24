import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { KolOrderByWithRelationInput } from '../kol/kol-order-by-with-relation.input';

@InputType()
export class TwitterProfileOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileCreatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pinnedTweetId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isProtected?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isVerified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    followersCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    followingCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tweetCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    listedCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likeCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    urls?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kolId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => KolOrderByWithRelationInput, {nullable:true})
    kol?: KolOrderByWithRelationInput;
}
