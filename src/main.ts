import { App } from './base/enums';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { logInitMessage } from './server/utils';
import { NestExpressApplication } from '@nestjs/platform-express';
import { port, corsOptions, validationPipe } from './server/config';
import { isProductionEnv, environment } from './base/constants/environment';

const bootstrap = async () => {
	const app = await NestFactory.create<NestExpressApplication>(AppModule, {
		logger: ['verbose'],
	});

	// const session = await initializeSession();
	// app.use(session);

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
};

bootstrap();
