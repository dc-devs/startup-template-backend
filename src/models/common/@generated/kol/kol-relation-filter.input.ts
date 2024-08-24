import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KolWhereInput } from './kol-where.input';

@InputType()
export class KolRelationFilter {

    @Field(() => KolWhereInput, {nullable:true})
    is?: KolWhereInput;

    @Field(() => KolWhereInput, {nullable:true})
    isNot?: KolWhereInput;
}
