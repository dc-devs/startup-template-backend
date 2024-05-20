import { v4 as uuidv4 } from 'uuid';
import { Cookie } from './common/enums';
import * as session from 'express-session';
import RedisStore from 'connect-redis';
import { SessionSecret } from './common/constants';
import { initializeRedis } from './initialize-redis';
import { sixtyDays } from '../common/constants/time-in-ms';

export const initializeSession = async () => {
	const redisClient = await initializeRedis();

	const sessionConfig = {
		store: new RedisStore({ client: redisClient }),
		name: Cookie.Name,
		resave: false,
		saveUninitialized: false,
		secret: SessionSecret,
		genid: () => {
			return uuidv4();
		},
		cookie: {
			secure: true,
			httpOnly: true,
			domain: Cookie.Domain,
			maxAge: sixtyDays,
			sameSite: 'none',
		},
	};

	return session(sessionConfig);
};
