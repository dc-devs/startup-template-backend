import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TwitterProfileCreateManyInput } from './twitter-profile-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTwitterProfileArgs {

    @Field(() => [TwitterProfileCreateManyInput], {nullable:false})
    @Type(() => TwitterProfileCreateManyInput)
    data!: Array<TwitterProfileCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
