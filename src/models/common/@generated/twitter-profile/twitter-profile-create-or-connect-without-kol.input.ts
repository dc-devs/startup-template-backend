import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TwitterProfileWhereUniqueInput } from './twitter-profile-where-unique.input';
import { Type } from 'class-transformer';
import { TwitterProfileCreateWithoutKolInput } from './twitter-profile-create-without-kol.input';

@InputType()
export class TwitterProfileCreateOrConnectWithoutKolInput {

    @Field(() => TwitterProfileWhereUniqueInput, {nullable:false})
    @Type(() => TwitterProfileWhereUniqueInput)
    where!: Prisma.AtLeast<TwitterProfileWhereUniqueInput, 'id' | 'kolId'>;

    @Field(() => TwitterProfileCreateWithoutKolInput, {nullable:false})
    @Type(() => TwitterProfileCreateWithoutKolInput)
    create!: TwitterProfileCreateWithoutKolInput;
}
