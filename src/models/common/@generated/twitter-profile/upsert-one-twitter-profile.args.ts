import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TwitterProfileWhereUniqueInput } from './twitter-profile-where-unique.input';
import { Type } from 'class-transformer';
import { TwitterProfileCreateInput } from './twitter-profile-create.input';
import { TwitterProfileUpdateInput } from './twitter-profile-update.input';

@ArgsType()
export class UpsertOneTwitterProfileArgs {

    @Field(() => TwitterProfileWhereUniqueInput, {nullable:false})
    @Type(() => TwitterProfileWhereUniqueInput)
    where!: Prisma.AtLeast<TwitterProfileWhereUniqueInput, 'id' | 'kolId'>;

    @Field(() => TwitterProfileCreateInput, {nullable:false})
    @Type(() => TwitterProfileCreateInput)
    create!: TwitterProfileCreateInput;

    @Field(() => TwitterProfileUpdateInput, {nullable:false})
    @Type(() => TwitterProfileUpdateInput)
    update!: TwitterProfileUpdateInput;
}
