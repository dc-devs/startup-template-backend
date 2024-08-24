import { Module } from '@nestjs/common';
import { TwitterProfilesService } from './twitter-profiles.service';
import { TwitterProfilesResolver } from './twitter-profiles.resolver';
import { PrismaService } from '../../base/services/prisma/prisma.service';

@Module({
	providers: [TwitterProfilesResolver, TwitterProfilesService, PrismaService],
	exports: [TwitterProfilesService],
})
export class TwitterProfilesModule {}
