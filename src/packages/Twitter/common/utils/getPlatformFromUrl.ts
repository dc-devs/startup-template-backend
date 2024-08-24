enum PlatformSearch {
	Telegram = 't.me',
}

enum PlatformName {
	Telegram = 'telegram',
}

const getPlatformFromUrl = ({ url }) => {
	let platform: string | null = null;

	if (url.includes(PlatformSearch.Telegram)) {
		platform = PlatformName.Telegram;
	}

	return platform;
};

export { getPlatformFromUrl };
