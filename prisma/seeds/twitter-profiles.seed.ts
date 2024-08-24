const twitterProfiles = [];

const firstTwitterProfile = {
	kolId: 1,
	profileId: '1524437076850135041',
	name: 'Cryptopeet',
	username: 'Crypto_peet',
	location: 'Italy',
	description:
		'Crypto Investor since 2017\nFull time researcher and Crypto Chad since 2023\nTG Community: https://t.co/XpQHfndBL6\n\nGet 10% Discount on TANGEM - CODE: CRYPTOPEET',
	imageUrl:
		'https://pbs.twimg.com/profile_images/1699445234780848128/2alB10Zi_400x400.jpg',
	profileCreatedAt: '2022-05-11T17:11:44.000Z',
	pinnedTweetId: '1800810570683171225',
	isProtected: false,
	isVerified: false,
	followersCount: 5544,
	followingCount: 1095,
	tweetCount: 10548,
	listedCount: 87,
	likeCount: 22794,
	urls: [
		{
			platform: 'telegram',
			url: 'https://t.me/cryptopeet_com',
			location: 'description',
		},
	],
};
twitterProfiles.push(firstTwitterProfile);

const secondTwitterProfile = {
	kolId: 2,
	profileId: '1484117053892141056',
	name: 'Thor | Kirito',
	username: 'Thorshammergems',
	location: 'Cryptonia',
	description:
		'Advisor | #Memecoin maxi | Degen\n\nNothing I post is financial advice. Always DYOR. Degening is high risk.\n\nMy ONLY telegram name: https://t.co/r2us2763Ow',
	imageUrl:
		'https://pbs.twimg.com/profile_images/1567104574942547970/tEcmMRNa_400x400.jpg',
	profileCreatedAt: '2022-01-20T10:55:23.000Z',
	pinnedTweetId: '1650052884212379648',
	isProtected: false,
	isVerified: false,
	followersCount: 101326,
	followingCount: 400,
	tweetCount: 20012,
	listedCount: 783,
	likeCount: 16589,
	urls: [
		{
			platform: 'telegram',
			url: 'http://t.me/KiritoPrince',
			location: 'description',
		},
	],
};
twitterProfiles.push(secondTwitterProfile);

const allTwitterProfilesCount = twitterProfiles.length;

export {
	twitterProfiles,
	firstTwitterProfile,
	secondTwitterProfile,
	allTwitterProfilesCount,
};
