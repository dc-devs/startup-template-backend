import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class KolUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    twitterHandle?: string;

    @Field(() => String, {nullable:true})
    telegramHandle?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
