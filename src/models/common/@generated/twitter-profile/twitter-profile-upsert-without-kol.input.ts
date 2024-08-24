import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TwitterProfileUpdateWithoutKolInput } from './twitter-profile-update-without-kol.input';
import { Type } from 'class-transformer';
import { TwitterProfileCreateWithoutKolInput } from './twitter-profile-create-without-kol.input';
import { TwitterProfileWhereInput } from './twitter-profile-where.input';

@InputType()
export class TwitterProfileUpsertWithoutKolInput {

    @Field(() => TwitterProfileUpdateWithoutKolInput, {nullable:false})
    @Type(() => TwitterProfileUpdateWithoutKolInput)
    update!: TwitterProfileUpdateWithoutKolInput;

    @Field(() => TwitterProfileCreateWithoutKolInput, {nullable:false})
    @Type(() => TwitterProfileCreateWithoutKolInput)
    create!: TwitterProfileCreateWithoutKolInput;

    @Field(() => TwitterProfileWhereInput, {nullable:true})
    @Type(() => TwitterProfileWhereInput)
    where?: TwitterProfileWhereInput;
}
