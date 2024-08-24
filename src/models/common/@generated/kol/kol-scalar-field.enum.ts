import { registerEnumType } from '@nestjs/graphql';

export enum KolScalarFieldEnum {
    id = "id",
    twitterHandle = "twitterHandle",
    telegramHandle = "telegramHandle",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(KolScalarFieldEnum, { name: 'KolScalarFieldEnum', description: undefined })
