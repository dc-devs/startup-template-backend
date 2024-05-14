import { Cookie } from '../enums';
import * as session from 'express-session';
import RedisStore from 'connect-redis';
import { SessionSecret } from '../constants';
import { initializeRedis } from './initialize-redis';
import { sixtyDays } from '../../base/constants/time-in-ms';

export const initializeSession = async () => {
	const redisClient = await initializeRedis();

	const sessionConfig = {
		store: new RedisStore({ client: redisClient }),
		name: Cookie.NAME,
		resave: false,
		saveUninitialized: false,
		secret: SessionSecret,
		cookie: {
			httpOnly: true,
			secure: true,
			maxAge: sixtyDays,
			sameSite: 'none',
		},
	};

	return session(sessionConfig);
};
