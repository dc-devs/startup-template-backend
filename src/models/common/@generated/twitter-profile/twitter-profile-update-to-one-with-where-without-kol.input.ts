import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TwitterProfileWhereInput } from './twitter-profile-where.input';
import { Type } from 'class-transformer';
import { TwitterProfileUpdateWithoutKolInput } from './twitter-profile-update-without-kol.input';

@InputType()
export class TwitterProfileUpdateToOneWithWhereWithoutKolInput {

    @Field(() => TwitterProfileWhereInput, {nullable:true})
    @Type(() => TwitterProfileWhereInput)
    where?: TwitterProfileWhereInput;

    @Field(() => TwitterProfileUpdateWithoutKolInput, {nullable:false})
    @Type(() => TwitterProfileUpdateWithoutKolInput)
    data!: TwitterProfileUpdateWithoutKolInput;
}
