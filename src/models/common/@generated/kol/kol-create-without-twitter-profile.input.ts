import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class KolCreateWithoutTwitterProfileInput {

    @Field(() => String, {nullable:false})
    twitterHandle!: string;

    @Field(() => String, {nullable:false})
    telegramHandle!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
