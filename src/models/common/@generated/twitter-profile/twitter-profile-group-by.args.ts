import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TwitterProfileWhereInput } from './twitter-profile-where.input';
import { Type } from 'class-transformer';
import { TwitterProfileOrderByWithAggregationInput } from './twitter-profile-order-by-with-aggregation.input';
import { TwitterProfileScalarFieldEnum } from './twitter-profile-scalar-field.enum';
import { TwitterProfileScalarWhereWithAggregatesInput } from './twitter-profile-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TwitterProfileCountAggregateInput } from './twitter-profile-count-aggregate.input';
import { TwitterProfileAvgAggregateInput } from './twitter-profile-avg-aggregate.input';
import { TwitterProfileSumAggregateInput } from './twitter-profile-sum-aggregate.input';
import { TwitterProfileMinAggregateInput } from './twitter-profile-min-aggregate.input';
import { TwitterProfileMaxAggregateInput } from './twitter-profile-max-aggregate.input';

@ArgsType()
export class TwitterProfileGroupByArgs {

    @Field(() => TwitterProfileWhereInput, {nullable:true})
    @Type(() => TwitterProfileWhereInput)
    where?: TwitterProfileWhereInput;

    @Field(() => [TwitterProfileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TwitterProfileOrderByWithAggregationInput>;

    @Field(() => [TwitterProfileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TwitterProfileScalarFieldEnum>;

    @Field(() => TwitterProfileScalarWhereWithAggregatesInput, {nullable:true})
    having?: TwitterProfileScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TwitterProfileCountAggregateInput, {nullable:true})
    _count?: TwitterProfileCountAggregateInput;

    @Field(() => TwitterProfileAvgAggregateInput, {nullable:true})
    _avg?: TwitterProfileAvgAggregateInput;

    @Field(() => TwitterProfileSumAggregateInput, {nullable:true})
    _sum?: TwitterProfileSumAggregateInput;

    @Field(() => TwitterProfileMinAggregateInput, {nullable:true})
    _min?: TwitterProfileMinAggregateInput;

    @Field(() => TwitterProfileMaxAggregateInput, {nullable:true})
    _max?: TwitterProfileMaxAggregateInput;
}
