import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TwitterProfileSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

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
    kolId?: keyof typeof SortOrder;
}
