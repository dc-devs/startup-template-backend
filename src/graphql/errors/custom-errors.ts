import ExtensionCode from './extension-code.enum';
import ErrorCode from '../../prisma/error-code.enum';
import { GraphQLError } from 'graphql';
import { UserValidationError } from '../../models/users/enums';

const customErrors = {
	[ErrorCode.UNIQUE_CONSTRAINT]: {
		email: () => {
			throw new GraphQLError(ExtensionCode.BAD_USER_INPUT, {
				extensions: {
					code: ErrorCode.UNIQUE_CONSTRAINT,
					errors: {
						email: {
							type: ExtensionCode.BAD_USER_INPUT,
							message: UserValidationError.EMAIL_IS_TAKEN,
						},
					},
				},
			});
		},
	},
	[ErrorCode.RECORD_NOT_FOUND]: {
		cause: (message: string) => {
			throw new GraphQLError(ExtensionCode.BAD_USER_INPUT, {
				extensions: {
					code: ErrorCode.UNIQUE_CONSTRAINT,
					errors: {
						cause: {
							type: ExtensionCode.BAD_USER_INPUT,
							message,
						},
					},
				},
			});
		},
	},
};

export default customErrors;
