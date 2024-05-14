import { Logger } from '.';

interface IOptions {
	port: string | number;
	environment: string;
	redisUrl: string | undefined;
	databaseUrl: string | undefined;
}

export const logInitMessage = ({
	port,
	redisUrl,
	environment,
	databaseUrl,
}: IOptions) => {
	console.log('');
	Logger.debug('');
	Logger.debug('Port:', port);
	Logger.debug('Environment:', environment);
	Logger.debug('Redis:', redisUrl);
	Logger.debug('Database:', databaseUrl);
	Logger.debug('');
};
