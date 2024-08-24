import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KolWhereInput } from './kol-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyKolArgs {

    @Field(() => KolWhereInput, {nullable:true})
    @Type(() => KolWhereInput)
    where?: KolWhereInput;
}
