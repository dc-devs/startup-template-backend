import { AppService } from './app.service';
import { AppController } from './app.controller';
import { KolsModule } from './models/kols/kols.module';
import { AuthModule } from './models/auth/auth.module';
import { UsersModule } from './models/users/users.module';
import { LoggerMiddleware } from './base/common/middleware';
import { GraphQLModule, ConfigModule } from './base/app/modules';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TwitterProfilesModule } from './models/twitter-profiles/twitter-profiles.module';

@Module({
	imports: [
		KolsModule,
		AuthModule,
		UsersModule,
		ConfigModule,
		GraphQLModule,
		TwitterProfilesModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(LoggerMiddleware)
			.forRoutes({ path: '*', method: RequestMethod.ALL });
	}
}
