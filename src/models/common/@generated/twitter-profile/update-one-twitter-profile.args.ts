import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TwitterProfileUpdateInput } from './twitter-profile-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TwitterProfileWhereUniqueInput } from './twitter-profile-where-unique.input';

@ArgsType()
export class UpdateOneTwitterProfileArgs {

    @Field(() => TwitterProfileUpdateInput, {nullable:false})
    @Type(() => TwitterProfileUpdateInput)
    data!: TwitterProfileUpdateInput;

    @Field(() => TwitterProfileWhereUniqueInput, {nullable:false})
    @Type(() => TwitterProfileWhereUniqueInput)
    where!: Prisma.AtLeast<TwitterProfileWhereUniqueInput, 'id' | 'kolId'>;
}
