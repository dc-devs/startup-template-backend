import { Host } from '../enums';

export const corsOptions = {
	credentials: true,
	origin: [
		Host.FRONTEND,
		Host.DEV_SERVER,
		Host.TEST_SERVER,
		Host.APOLLO_CLIENT,
		Host.FRONTEND_SECURE,
	],
	exposedHeaders: ['Set-Cookie'],
};
