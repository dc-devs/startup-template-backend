import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TwitterProfileUncheckedUpdateOneWithoutKolNestedInput } from '../twitter-profile/twitter-profile-unchecked-update-one-without-kol-nested.input';

@InputType()
export class KolUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    twitterHandle?: string;

    @Field(() => String, {nullable:true})
    telegramHandle?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TwitterProfileUncheckedUpdateOneWithoutKolNestedInput, {nullable:true})
    twitterProfile?: TwitterProfileUncheckedUpdateOneWithoutKolNestedInput;
}
