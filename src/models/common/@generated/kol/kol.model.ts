import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TwitterProfile } from '../twitter-profile/twitter-profile.model';

@ObjectType()
export class Kol {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    twitterHandle!: string;

    @Field(() => String, {nullable:false})
    telegramHandle!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => TwitterProfile, {nullable:true})
    twitterProfile?: TwitterProfile | null;
}
