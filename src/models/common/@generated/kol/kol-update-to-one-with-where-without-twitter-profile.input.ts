import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KolWhereInput } from './kol-where.input';
import { Type } from 'class-transformer';
import { KolUpdateWithoutTwitterProfileInput } from './kol-update-without-twitter-profile.input';

@InputType()
export class KolUpdateToOneWithWhereWithoutTwitterProfileInput {

    @Field(() => KolWhereInput, {nullable:true})
    @Type(() => KolWhereInput)
    where?: KolWhereInput;

    @Field(() => KolUpdateWithoutTwitterProfileInput, {nullable:false})
    @Type(() => KolUpdateWithoutTwitterProfileInput)
    data!: KolUpdateWithoutTwitterProfileInput;
}
