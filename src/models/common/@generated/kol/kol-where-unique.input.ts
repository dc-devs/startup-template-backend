import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { KolWhereInput } from './kol-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TwitterProfileNullableRelationFilter } from '../twitter-profile/twitter-profile-nullable-relation-filter.input';

@InputType()
export class KolWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    twitterHandle?: string;

    @Field(() => String, {nullable:true})
    telegramHandle?: string;

    @Field(() => [KolWhereInput], {nullable:true})
    AND?: Array<KolWhereInput>;

    @Field(() => [KolWhereInput], {nullable:true})
    OR?: Array<KolWhereInput>;

    @Field(() => [KolWhereInput], {nullable:true})
    NOT?: Array<KolWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => TwitterProfileNullableRelationFilter, {nullable:true})
    twitterProfile?: TwitterProfileNullableRelationFilter;
}
