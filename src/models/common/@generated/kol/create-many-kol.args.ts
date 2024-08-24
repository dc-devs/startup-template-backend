import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KolCreateManyInput } from './kol-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyKolArgs {

    @Field(() => [KolCreateManyInput], {nullable:false})
    @Type(() => KolCreateManyInput)
    data!: Array<KolCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
