import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Kol } from '../kol/kol.model';

@ObjectType()
export class TwitterProfile {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    profileId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => String, {nullable:false})
    profileCreatedAt!: string;

    @Field(() => String, {nullable:false})
    pinnedTweetId!: string;

    @Field(() => Boolean, {nullable:false})
    isProtected!: boolean;

    @Field(() => Boolean, {nullable:false})
    isVerified!: boolean;

    @Field(() => Int, {nullable:false})
    followersCount!: number;

    @Field(() => Int, {nullable:false})
    followingCount!: number;

    @Field(() => Int, {nullable:false})
    tweetCount!: number;

    @Field(() => Int, {nullable:false})
    listedCount!: number;

    @Field(() => Int, {nullable:false})
    likeCount!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    urls!: any;

    @Field(() => Int, {nullable:false})
    kolId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Kol, {nullable:false})
    kol?: Kol;
}
