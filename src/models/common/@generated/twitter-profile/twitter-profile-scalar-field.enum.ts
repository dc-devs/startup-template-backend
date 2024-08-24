import { registerEnumType } from '@nestjs/graphql';

export enum TwitterProfileScalarFieldEnum {
    id = "id",
    profileId = "profileId",
    name = "name",
    username = "username",
    location = "location",
    description = "description",
    imageUrl = "imageUrl",
    profileCreatedAt = "profileCreatedAt",
    pinnedTweetId = "pinnedTweetId",
    isProtected = "isProtected",
    isVerified = "isVerified",
    followersCount = "followersCount",
    followingCount = "followingCount",
    tweetCount = "tweetCount",
    listedCount = "listedCount",
    likeCount = "likeCount",
    urls = "urls",
    kolId = "kolId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TwitterProfileScalarFieldEnum, { name: 'TwitterProfileScalarFieldEnum', description: undefined })
