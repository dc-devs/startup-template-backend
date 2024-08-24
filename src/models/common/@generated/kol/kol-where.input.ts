import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TwitterProfileNullableRelationFilter } from '../twitter-profile/twitter-profile-nullable-relation-filter.input';

@InputType()
export class KolWhereInput {

    @Field(() => [KolWhereInput], {nullable:true})
    AND?: Array<KolWhereInput>;

    @Field(() => [KolWhereInput], {nullable:true})
    OR?: Array<KolWhereInput>;

    @Field(() => [KolWhereInput], {nullable:true})
    NOT?: Array<KolWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    twitterHandle?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    telegramHandle?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => TwitterProfileNullableRelationFilter, {nullable:true})
    twitterProfile?: TwitterProfileNullableRelationFilter;
}
