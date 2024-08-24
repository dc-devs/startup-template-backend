import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KolCreateInput } from './kol-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneKolArgs {

    @Field(() => KolCreateInput, {nullable:false})
    @Type(() => KolCreateInput)
    data!: KolCreateInput;
}
