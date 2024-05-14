import { App } from '../common/enums';
import { Type } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { logInitMessage } from '../common/utils';
import { initializeSession } from '../session-store';
import { NestExpressApplication } from '@nestjs/platform-express';
import { port, corsOptions, validationPipe } from '../server/config';
import { isProductionEnv, environment } from '../common/constants/environment';

export async function bootstrap<AppModule>({
	AppModule,
}: {
	AppModule: Type<AppModule>;
}) {
	const session = await initializeSession();
	const app = await NestFactory.create<NestExpressApplication>(AppModule, {
		logger: ['verbose'],
	});

	app.use(session);
	app.enableShutdownHooks();
	app.enableCors(corsOptions);
	app.useGlobalPipes(validationPipe);
	app.set(App.TRUST_PROXY, !isProductionEnv);

	await app.listen(port);

	logInitMessage({
		port,
		environment,
		redisUrl: process.env.REDIS_URL,
		databaseUrl: process.env.DATABASE_URL,
	});
}
