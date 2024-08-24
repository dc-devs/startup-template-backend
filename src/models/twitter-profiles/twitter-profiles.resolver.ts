import { Resolver } from '@nestjs/graphql';
import { TwitterProfilesService } from './twitter-profiles.service';
import { TwitterProfile } from '../common/@generated/twitter-profile/twitter-profile.model';
import { TwitterProfileUpdateInput } from '../common/@generated/twitter-profile/twitter-profile-update.input';
import { TwitterProfileCreateInput } from '../common/@generated/twitter-profile/twitter-profile-create.input';
import { BaseGraphqlCrudResolver } from '../../base/app/resolver/base-graphql-crud-resolver';
import { FindManyTwitterProfileArgs } from '../common/@generated/twitter-profile/find-many-twitter-profile.args';
import { TwitterProfileWhereUniqueInput } from '../common/@generated/twitter-profile/twitter-profile-where-unique.input';
import { DeleteOneTwitterProfileArgs } from '../common/@generated/twitter-profile/delete-one-twitter-profile.args';
import { FindUniqueTwitterProfileArgs } from '../common/@generated/twitter-profile/find-unique-twitter-profile.args';

@Resolver(() => TwitterProfile)
export class TwitterProfilesResolver extends BaseGraphqlCrudResolver<
	TwitterProfile,
	TwitterProfileWhereUniqueInput,
	FindUniqueTwitterProfileArgs,
	FindManyTwitterProfileArgs,
	TwitterProfileCreateInput,
	TwitterProfileUpdateInput,
	DeleteOneTwitterProfileArgs
>({
	entity: TwitterProfile,
	whereUniqueInput: TwitterProfileWhereUniqueInput,
	findUniqueArgs: FindUniqueTwitterProfileArgs,
	findManyArgs: FindManyTwitterProfileArgs,
	createOneInput: TwitterProfileCreateInput,
	updateOneInput: TwitterProfileUpdateInput,
	deleteOneArgs: DeleteOneTwitterProfileArgs,
}) {
	constructor(protected usersService: TwitterProfilesService) {
		super({ baseService: usersService });
	}
}
