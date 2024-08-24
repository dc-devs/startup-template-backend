import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TwitterProfileWhereInput } from './twitter-profile-where.input';

@InputType()
export class TwitterProfileNullableRelationFilter {

    @Field(() => TwitterProfileWhereInput, {nullable:true})
    is?: TwitterProfileWhereInput;

    @Field(() => TwitterProfileWhereInput, {nullable:true})
    isNot?: TwitterProfileWhereInput;
}
