import { createClient } from 'redis';
import { Logger } from '../../base/utils';

let connectedRedisClient;

const redisClient = createClient({
	legacyMode: true,
	url: process.env.REDIS_URL,
});

const initializeRedis = async () => {
	return new Promise(async (resolve, reject) => {
		redisClient.on('error', (error) => {
			Logger.error(
				'Redis:',
				`Could not establish a connection with redis. ${error}`,
			);
			console.log('');

			reject(error);
		});

		redisClient.on('connect', () => {
			Logger.debug('Redis::event', 'connect');
			console.log('');

			connectedRedisClient = redisClient;
			resolve(redisClient);
		});

		await redisClient.connect();
	});
};

export { connectedRedisClient, initializeRedis };
