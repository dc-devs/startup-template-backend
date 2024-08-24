import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TwitterProfileWhereUniqueInput } from './twitter-profile-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTwitterProfileOrThrowArgs {

    @Field(() => TwitterProfileWhereUniqueInput, {nullable:false})
    @Type(() => TwitterProfileWhereUniqueInput)
    where!: Prisma.AtLeast<TwitterProfileWhereUniqueInput, 'id' | 'kolId'>;
}
