import { Logger } from '../utils';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	use(request: Request, response: Response, next: NextFunction) {
		const { method, url } = request;

		Logger.debug('[Middleware][Log]', method, url);

		next();
	}
}
