import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TwitterProfileCreateInput } from './twitter-profile-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTwitterProfileArgs {

    @Field(() => TwitterProfileCreateInput, {nullable:false})
    @Type(() => TwitterProfileCreateInput)
    data!: TwitterProfileCreateInput;
}
