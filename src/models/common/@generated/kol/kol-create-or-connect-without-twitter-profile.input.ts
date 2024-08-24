import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { KolWhereUniqueInput } from './kol-where-unique.input';
import { Type } from 'class-transformer';
import { KolCreateWithoutTwitterProfileInput } from './kol-create-without-twitter-profile.input';

@InputType()
export class KolCreateOrConnectWithoutTwitterProfileInput {

    @Field(() => KolWhereUniqueInput, {nullable:false})
    @Type(() => KolWhereUniqueInput)
    where!: Prisma.AtLeast<KolWhereUniqueInput, 'id' | 'twitterHandle' | 'telegramHandle'>;

    @Field(() => KolCreateWithoutTwitterProfileInput, {nullable:false})
    @Type(() => KolCreateWithoutTwitterProfileInput)
    create!: KolCreateWithoutTwitterProfileInput;
}
