import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TwitterProfileOrderByWithRelationInput } from '../twitter-profile/twitter-profile-order-by-with-relation.input';

@InputType()
export class KolOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    twitterHandle?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    telegramHandle?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => TwitterProfileOrderByWithRelationInput, {nullable:true})
    twitterProfile?: TwitterProfileOrderByWithRelationInput;
}
