import * as colors from '@colors/colors';
import { isDevelopmentEnv } from '../constants';

export class Logger {
	static debug = (...messages) => {
		const log = console.log;
		const title = messages.shift();

		const coloredMessages = messages.map((baseMessage) => {
			let message;
			const isMessageApplicableForColor = !Array.isArray(baseMessage);

			if (isMessageApplicableForColor) {
				message = baseMessage.toString();
				message = message.green;
			} else {
				message = baseMessage;
			}

			return message;
		});

		if (isDevelopmentEnv || process.env.LOGGER_DEBUG) {
			log.apply(console, [
				colors.cyan('[Nest-Debug]'),
				colors.cyan(title),
				...coloredMessages,
			]);
		}
	};

	static success = (...messages) => {
		const log = console.log;
		const coloredMessages = messages.map((baseMessage) => {
			let message;
			const isMessageApplicableForColor = !Array.isArray(baseMessage);

			if (isMessageApplicableForColor) {
				message = baseMessage.toString();
				message = message.green;
			} else {
				message = baseMessage;
			}

			return message;
		});

		log.apply(console, [
			colors.green('[Nest-Success]'),
			...coloredMessages,
		]);
	};

	static error = (...messages) => {
		const log = console.log;
		const coloredMessages = messages.map((baseMessage) => {
			let message;
			const isMessageApplicableForColor = !Array.isArray(baseMessage);

			if (isMessageApplicableForColor) {
				message = baseMessage.toString();
				message = message.red;
			} else {
				message = baseMessage;
			}

			return message;
		});

		log.apply(console, [colors.red('[Nest-Error]'), ...coloredMessages]);
	};
}
