import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TwitterProfileUncheckedCreateNestedOneWithoutKolInput } from '../twitter-profile/twitter-profile-unchecked-create-nested-one-without-kol.input';

@InputType()
export class KolUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    twitterHandle!: string;

    @Field(() => String, {nullable:false})
    telegramHandle!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TwitterProfileUncheckedCreateNestedOneWithoutKolInput, {nullable:true})
    twitterProfile?: TwitterProfileUncheckedCreateNestedOneWithoutKolInput;
}
