import { fetchUserProfile } from './methods/fetchUserProfile';
import { fetchTweets } from './methods/fetchTweets';
import { IFetchTweets, IFetchUser } from './common/interfaces';

interface IOptions {
	bearerToken: string;
}

class Twitter {
	bearerToken: string;

	constructor({ bearerToken }: IOptions) {
		this.bearerToken = bearerToken;
	}

	fetchUserProfile = async ({
		username,
	}: IFetchUser): Promise<Record<string, unknown> | null> => {
		return await fetchUserProfile({
			username,
			bearerToken: this.bearerToken,
		});
	};

	fetchTweets = async ({ username }: IFetchTweets) => {
		return await fetchTweets({ username, bearerToken: this.bearerToken });
	};
}

export { Twitter };
