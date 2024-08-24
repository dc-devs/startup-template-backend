import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { KolRelationFilter } from '../kol/kol-relation-filter.input';

@InputType()
export class TwitterProfileWhereInput {

    @Field(() => [TwitterProfileWhereInput], {nullable:true})
    AND?: Array<TwitterProfileWhereInput>;

    @Field(() => [TwitterProfileWhereInput], {nullable:true})
    OR?: Array<TwitterProfileWhereInput>;

    @Field(() => [TwitterProfileWhereInput], {nullable:true})
    NOT?: Array<TwitterProfileWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    profileId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    location?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    imageUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    profileCreatedAt?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    pinnedTweetId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isProtected?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isVerified?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    followersCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    followingCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    tweetCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    listedCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    likeCount?: IntFilter;

    @Field(() => JsonFilter, {nullable:true})
    urls?: JsonFilter;

    @Field(() => IntFilter, {nullable:true})
    kolId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => KolRelationFilter, {nullable:true})
    kol?: KolRelationFilter;
}
