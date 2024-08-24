import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class KolAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
