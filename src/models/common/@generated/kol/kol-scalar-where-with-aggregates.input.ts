import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class KolScalarWhereWithAggregatesInput {

    @Field(() => [KolScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<KolScalarWhereWithAggregatesInput>;

    @Field(() => [KolScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<KolScalarWhereWithAggregatesInput>;

    @Field(() => [KolScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<KolScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    twitterHandle?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    telegramHandle?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
