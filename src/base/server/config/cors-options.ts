import { Host } from '../enums';

export const corsOptions = {
	origin: [
		Host.LocaleDevelopmentServer,
		Host.LocaleTestServer,
		Host.ApiLocalStartUpTemplateServer,
	],
	credentials: true,
	exposedHeaders: ['Set-Cookie'],
};
