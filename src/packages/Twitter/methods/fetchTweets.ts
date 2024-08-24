import axios from 'axios';

interface IOptions {
	username: string;
	bearerToken: string;
	nextToken?: string | null;
}

interface IParams {
	[key: string]: string;
}

const getTweetsPage = async ({
	username,
	bearerToken,
	nextToken,
}: IOptions) => {
	const url = `https://api.twitter.com/2/tweets/search/recent`;
	const params: IParams = {
		query: `from:${username}`,
		'tweet.fields': 'referenced_tweets',
	};
	const headers = {
		Authorization: `Bearer ${bearerToken}`,
		'User-Agent': 'v2UserTweetsJS',
	};

	if (nextToken) {
		params.pagination_token = nextToken;
	}

	const response = await axios(url, { headers, params });
	const { data } = response;

	return data;
};

const fetchTweets = async ({ username, bearerToken }: IOptions) => {
	let tweets: Record<string, any>[] = [];
	let hasNextPage = true;
	let nextToken = null;
	let count = 0;

	while (hasNextPage && count < 5) {
		const response = await getTweetsPage({
			username,
			bearerToken,
			nextToken,
		});
		const { data, meta } = response;
		const hasTweets = meta?.result_count > 0;
		const filteredTweets = (data as any[]).filter(
			(tweet: Record<string, any>) => {
				return !tweet?.referenced_tweets;
			},
		);

		if (hasTweets) {
			if (data) {
				tweets = [...tweets, ...filteredTweets];
			}

			if (meta?.next_token) {
				nextToken = meta?.next_token;
			} else {
				hasNextPage = false;
			}

			count += 1;
		} else {
			hasNextPage = false;
		}
	}

	return tweets;
};

export { fetchTweets };
