import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TwitterProfileCreateWithoutKolInput } from './twitter-profile-create-without-kol.input';
import { Type } from 'class-transformer';
import { TwitterProfileCreateOrConnectWithoutKolInput } from './twitter-profile-create-or-connect-without-kol.input';
import { Prisma } from '@prisma/client';
import { TwitterProfileWhereUniqueInput } from './twitter-profile-where-unique.input';

@InputType()
export class TwitterProfileCreateNestedOneWithoutKolInput {

    @Field(() => TwitterProfileCreateWithoutKolInput, {nullable:true})
    @Type(() => TwitterProfileCreateWithoutKolInput)
    create?: TwitterProfileCreateWithoutKolInput;

    @Field(() => TwitterProfileCreateOrConnectWithoutKolInput, {nullable:true})
    @Type(() => TwitterProfileCreateOrConnectWithoutKolInput)
    connectOrCreate?: TwitterProfileCreateOrConnectWithoutKolInput;

    @Field(() => TwitterProfileWhereUniqueInput, {nullable:true})
    @Type(() => TwitterProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<TwitterProfileWhereUniqueInput, 'id' | 'kolId'>;
}
