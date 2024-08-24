import { Twitter } from './Twitter';
import path from 'path';
import { config } from 'dotenv';

const pathToEnv = path.join(__dirname, '..', '..', '..', '.env');

config({
	path: pathToEnv,
});

const bearerToken = process.env.X_BEARER_TOKEN as string;

(async () => {
	const twitter = new Twitter({ bearerToken });

	// const username = 'Crypto_peet';
	const username = 'Thorshammergems';
	const profile = await twitter.fetchUserProfile({ username });
	console.log(profile);
	// @ts-expect-error cuz
	console.log(profile.entities?.description?.urls);

	// const username = 'Thorshammergems';
	// const tweets = await twitter.fetchTweets({ username });
	// console.log('tweets', tweets);
})();
