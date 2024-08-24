import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TwitterProfileUpdateOneWithoutKolNestedInput } from '../twitter-profile/twitter-profile-update-one-without-kol-nested.input';

@InputType()
export class KolUpdateInput {

    @Field(() => String, {nullable:true})
    twitterHandle?: string;

    @Field(() => String, {nullable:true})
    telegramHandle?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TwitterProfileUpdateOneWithoutKolNestedInput, {nullable:true})
    twitterProfile?: TwitterProfileUpdateOneWithoutKolNestedInput;
}
