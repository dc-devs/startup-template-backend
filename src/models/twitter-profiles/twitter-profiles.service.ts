import { Injectable } from '@nestjs/common';
import { modelName, select } from './common/constants';
import { TwitterProfile } from '../common/@generated/twitter-profile/twitter-profile.model';
import { PrismaService } from '../../base/services/prisma/prisma.service';
import { TwitterProfileCreateInput } from '../common/@generated/twitter-profile/twitter-profile-create.input';
import { TwitterProfileUpdateInput } from '../common/@generated/twitter-profile/twitter-profile-update.input';
import { FindManyTwitterProfileArgs } from '../common/@generated/twitter-profile/find-many-twitter-profile.args';
import { DeleteOneTwitterProfileArgs } from '../common/@generated/twitter-profile/delete-one-twitter-profile.args';
import { FindUniqueTwitterProfileArgs } from '../common/@generated/twitter-profile/find-unique-twitter-profile.args';
import { BasePrismaCrudService } from '../../base/app/service/base-prisma-crud-service';
import { TwitterProfileWhereUniqueInput } from '../common/@generated/twitter-profile/twitter-profile-where-unique.input';

@Injectable()
export class TwitterProfilesService extends BasePrismaCrudService<
	TwitterProfile,
	TwitterProfileWhereUniqueInput,
	FindUniqueTwitterProfileArgs,
	FindManyTwitterProfileArgs,
	TwitterProfileCreateInput,
	TwitterProfileUpdateInput,
	DeleteOneTwitterProfileArgs
> {
	constructor(protected prisma: PrismaService) {
		super({
			prisma,
			select,
			modelName,
		});
	}
}
