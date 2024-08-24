import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KolCreateWithoutTwitterProfileInput } from './kol-create-without-twitter-profile.input';
import { Type } from 'class-transformer';
import { KolCreateOrConnectWithoutTwitterProfileInput } from './kol-create-or-connect-without-twitter-profile.input';
import { KolUpsertWithoutTwitterProfileInput } from './kol-upsert-without-twitter-profile.input';
import { Prisma } from '@prisma/client';
import { KolWhereUniqueInput } from './kol-where-unique.input';
import { KolUpdateToOneWithWhereWithoutTwitterProfileInput } from './kol-update-to-one-with-where-without-twitter-profile.input';

@InputType()
export class KolUpdateOneRequiredWithoutTwitterProfileNestedInput {

    @Field(() => KolCreateWithoutTwitterProfileInput, {nullable:true})
    @Type(() => KolCreateWithoutTwitterProfileInput)
    create?: KolCreateWithoutTwitterProfileInput;

    @Field(() => KolCreateOrConnectWithoutTwitterProfileInput, {nullable:true})
    @Type(() => KolCreateOrConnectWithoutTwitterProfileInput)
    connectOrCreate?: KolCreateOrConnectWithoutTwitterProfileInput;

    @Field(() => KolUpsertWithoutTwitterProfileInput, {nullable:true})
    @Type(() => KolUpsertWithoutTwitterProfileInput)
    upsert?: KolUpsertWithoutTwitterProfileInput;

    @Field(() => KolWhereUniqueInput, {nullable:true})
    @Type(() => KolWhereUniqueInput)
    connect?: Prisma.AtLeast<KolWhereUniqueInput, 'id' | 'twitterHandle' | 'telegramHandle'>;

    @Field(() => KolUpdateToOneWithWhereWithoutTwitterProfileInput, {nullable:true})
    @Type(() => KolUpdateToOneWithWhereWithoutTwitterProfileInput)
    update?: KolUpdateToOneWithWhereWithoutTwitterProfileInput;
}
