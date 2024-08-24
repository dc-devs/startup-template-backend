import { ITwitterProfile } from '../../../src/packages/Twitter/common/interfaces';

const profile: ITwitterProfile = {
	location: 'Italy',
	pinned_tweet_id: '1800810570683171225',
	id: '1524437076850135041',
	protected: false,
	username: 'Crypto_peet',
	name: 'Cryptopeet',
	created_at: '2022-05-11T17:11:44.000Z',
	profile_image_url:
		'https://pbs.twimg.com/profile_images/1699445234780848128/2alB10Zi_normal.jpg',
	public_metrics: {
		followers_count: 5520,
		following_count: 1095,
		tweet_count: 10526,
		listed_count: 87,
		like_count: 22758,
	},
	description:
		'Crypto Investor since 2017\nFull time researcher and Crypto Chad since 2023\nTG Community: https://t.co/XpQHfndBL6\n\nGet 10% Discount on TANGEM - CODE: CRYPTOPEET',
	verified: false,
	entities: {
		description: {
			urls: [
				{
					start: 89,
					end: 112,
					url: 'https://t.co/XpQHfndBL6',
					expanded_url: 'https://t.me/cryptopeet_com',
					display_url: 't.me/cryptopeet_com',
				},
			],
		},
	},
};

export { profile };
