import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TwitterProfileCreateWithoutKolInput } from './twitter-profile-create-without-kol.input';
import { Type } from 'class-transformer';
import { TwitterProfileCreateOrConnectWithoutKolInput } from './twitter-profile-create-or-connect-without-kol.input';
import { TwitterProfileUpsertWithoutKolInput } from './twitter-profile-upsert-without-kol.input';
import { TwitterProfileWhereInput } from './twitter-profile-where.input';
import { Prisma } from '@prisma/client';
import { TwitterProfileWhereUniqueInput } from './twitter-profile-where-unique.input';
import { TwitterProfileUpdateToOneWithWhereWithoutKolInput } from './twitter-profile-update-to-one-with-where-without-kol.input';

@InputType()
export class TwitterProfileUncheckedUpdateOneWithoutKolNestedInput {

    @Field(() => TwitterProfileCreateWithoutKolInput, {nullable:true})
    @Type(() => TwitterProfileCreateWithoutKolInput)
    create?: TwitterProfileCreateWithoutKolInput;

    @Field(() => TwitterProfileCreateOrConnectWithoutKolInput, {nullable:true})
    @Type(() => TwitterProfileCreateOrConnectWithoutKolInput)
    connectOrCreate?: TwitterProfileCreateOrConnectWithoutKolInput;

    @Field(() => TwitterProfileUpsertWithoutKolInput, {nullable:true})
    @Type(() => TwitterProfileUpsertWithoutKolInput)
    upsert?: TwitterProfileUpsertWithoutKolInput;

    @Field(() => TwitterProfileWhereInput, {nullable:true})
    @Type(() => TwitterProfileWhereInput)
    disconnect?: TwitterProfileWhereInput;

    @Field(() => TwitterProfileWhereInput, {nullable:true})
    @Type(() => TwitterProfileWhereInput)
    delete?: TwitterProfileWhereInput;

    @Field(() => TwitterProfileWhereUniqueInput, {nullable:true})
    @Type(() => TwitterProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<TwitterProfileWhereUniqueInput, 'id' | 'kolId'>;

    @Field(() => TwitterProfileUpdateToOneWithWhereWithoutKolInput, {nullable:true})
    @Type(() => TwitterProfileUpdateToOneWithWhereWithoutKolInput)
    update?: TwitterProfileUpdateToOneWithWhereWithoutKolInput;
}
