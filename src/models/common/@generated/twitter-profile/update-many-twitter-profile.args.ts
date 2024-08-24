import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TwitterProfileUpdateManyMutationInput } from './twitter-profile-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TwitterProfileWhereInput } from './twitter-profile-where.input';

@ArgsType()
export class UpdateManyTwitterProfileArgs {

    @Field(() => TwitterProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => TwitterProfileUpdateManyMutationInput)
    data!: TwitterProfileUpdateManyMutationInput;

    @Field(() => TwitterProfileWhereInput, {nullable:true})
    @Type(() => TwitterProfileWhereInput)
    where?: TwitterProfileWhereInput;
}
