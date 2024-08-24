import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TwitterProfileCreateNestedOneWithoutKolInput } from '../twitter-profile/twitter-profile-create-nested-one-without-kol.input';

@InputType()
export class KolCreateInput {

    @Field(() => String, {nullable:false})
    twitterHandle!: string;

    @Field(() => String, {nullable:false})
    telegramHandle!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TwitterProfileCreateNestedOneWithoutKolInput, {nullable:true})
    twitterProfile?: TwitterProfileCreateNestedOneWithoutKolInput;
}
