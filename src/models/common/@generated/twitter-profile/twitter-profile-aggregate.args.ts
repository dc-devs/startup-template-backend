import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TwitterProfileWhereInput } from './twitter-profile-where.input';
import { Type } from 'class-transformer';
import { TwitterProfileOrderByWithRelationInput } from './twitter-profile-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TwitterProfileWhereUniqueInput } from './twitter-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TwitterProfileCountAggregateInput } from './twitter-profile-count-aggregate.input';
import { TwitterProfileAvgAggregateInput } from './twitter-profile-avg-aggregate.input';
import { TwitterProfileSumAggregateInput } from './twitter-profile-sum-aggregate.input';
import { TwitterProfileMinAggregateInput } from './twitter-profile-min-aggregate.input';
import { TwitterProfileMaxAggregateInput } from './twitter-profile-max-aggregate.input';

@ArgsType()
export class TwitterProfileAggregateArgs {

    @Field(() => TwitterProfileWhereInput, {nullable:true})
    @Type(() => TwitterProfileWhereInput)
    where?: TwitterProfileWhereInput;

    @Field(() => [TwitterProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TwitterProfileOrderByWithRelationInput>;

    @Field(() => TwitterProfileWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TwitterProfileWhereUniqueInput, 'id' | 'kolId'>;

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
