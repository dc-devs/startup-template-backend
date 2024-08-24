import { Module } from '@nestjs/common';
import { KolsService } from './kols.service';
import { KolsResolver } from './kols.resolver';
import { PrismaService } from '../../base/services/prisma/prisma.service';

@Module({
	providers: [KolsResolver, KolsService, PrismaService],
	exports: [KolsService],
})
export class KolsModule {}
