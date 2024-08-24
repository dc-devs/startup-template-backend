import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TwitterProfileWhereInput } from './twitter-profile-where.input';
import { Type } from 'class-transformer';
import { TwitterProfileOrderByWithRelationInput } from './twitter-profile-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TwitterProfileWhereUniqueInput } from './twitter-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TwitterProfileScalarFieldEnum } from './twitter-profile-scalar-field.enum';

@ArgsType()
export class FindFirstTwitterProfileArgs {

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

    @Field(() => [TwitterProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TwitterProfileScalarFieldEnum>;
}
