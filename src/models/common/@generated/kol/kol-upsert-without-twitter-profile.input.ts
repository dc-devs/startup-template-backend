import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KolUpdateWithoutTwitterProfileInput } from './kol-update-without-twitter-profile.input';
import { Type } from 'class-transformer';
import { KolCreateWithoutTwitterProfileInput } from './kol-create-without-twitter-profile.input';
import { KolWhereInput } from './kol-where.input';

@InputType()
export class KolUpsertWithoutTwitterProfileInput {

    @Field(() => KolUpdateWithoutTwitterProfileInput, {nullable:false})
    @Type(() => KolUpdateWithoutTwitterProfileInput)
    update!: KolUpdateWithoutTwitterProfileInput;

    @Field(() => KolCreateWithoutTwitterProfileInput, {nullable:false})
    @Type(() => KolCreateWithoutTwitterProfileInput)
    create!: KolCreateWithoutTwitterProfileInput;

    @Field(() => KolWhereInput, {nullable:true})
    @Type(() => KolWhereInput)
    where?: KolWhereInput;
}
