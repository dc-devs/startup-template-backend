import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TwitterProfileWhereInput } from './twitter-profile-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTwitterProfileArgs {

    @Field(() => TwitterProfileWhereInput, {nullable:true})
    @Type(() => TwitterProfileWhereInput)
    where?: TwitterProfileWhereInput;
}
