import { createClient } from 'redis';
import { Logger } from '../common/utils';

let connectedRedisClient;

const redisClient = createClient({
	// legacyMode: true,
	url: process.env.REDIS_URL,
});

const initializeRedis = async () => {
	return new Promise(async (resolve, reject) => {
		redisClient.on('error', (error) => {
			Logger.error('Redis:', error);
			console.log('');

			reject(error);
		});

		redisClient.on('connect', () => {
			Logger.debug('Redis::event', 'connect');
		});

		redisClient.on('ready', () => {
			Logger.debug('Redis::event', 'ready');
			console.log('');

			connectedRedisClient = redisClient;
			resolve(redisClient);
		});

		await redisClient.connect();
	});
};

export { connectedRedisClient, initializeRedis };
