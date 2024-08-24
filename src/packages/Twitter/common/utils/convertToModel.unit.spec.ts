import { convertToModel } from './convertToModel';
import { profile } from '../../../../../test/Twitter/mocks/profile';

describe('convertToModel', () => {
	test('is a function', () => {
		expect(convertToModel).toBeInstanceOf(Function);
	});

	describe('when passed a twitter profile', () => {
		let twitterModel;

		beforeEach(() => {
			twitterModel = convertToModel({ twitterProfile: profile });
		});

		test('should convert to Twitter Model', () => {
			expect(twitterModel).toStrictEqual({
				profileId: '1524437076850135041',
				name: 'Cryptopeet',
				username: 'Crypto_peet',
				location: 'Italy',
				description:
					'Crypto Investor since 2017\nFull time researcher and Crypto Chad since 2023\nTG Community: https://t.co/XpQHfndBL6\n\nGet 10% Discount on TANGEM - CODE: CRYPTOPEET',
				imageUrl:
					'https://pbs.twimg.com/profile_images/1699445234780848128/2alB10Zi_400x400.jpg',
				createdAt: '2022-05-11T17:11:44.000Z',
				pinnedTweetId: '1800810570683171225',
				isProtected: false,
				isVerified: false,
				followersCount: 5520,
				followingCount: 1095,
				tweetCount: 10526,
				listedCount: 87,
				likeCount: 22758,
				urls: [
					{
						location: 'description',
						url: 'https://t.me/cryptopeet_com',
						platform: 'telegram',
					},
				],
			});
		});
	});
});
