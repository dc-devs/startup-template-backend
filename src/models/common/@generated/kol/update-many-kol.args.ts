import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KolUpdateManyMutationInput } from './kol-update-many-mutation.input';
import { Type } from 'class-transformer';
import { KolWhereInput } from './kol-where.input';

@ArgsType()
export class UpdateManyKolArgs {

    @Field(() => KolUpdateManyMutationInput, {nullable:false})
    @Type(() => KolUpdateManyMutationInput)
    data!: KolUpdateManyMutationInput;

    @Field(() => KolWhereInput, {nullable:true})
    @Type(() => KolWhereInput)
    where?: KolWhereInput;
}
