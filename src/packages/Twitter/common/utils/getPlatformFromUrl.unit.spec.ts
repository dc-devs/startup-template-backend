import { getPlatformFromUrl } from './getPlatformFromUrl';

describe('getPlatformFromUrl', () => {
	test('is a function', () => {
		expect(getPlatformFromUrl).toBeInstanceOf(Function);
	});

	describe('when passed a url', () => {
		let platform;

		beforeEach(() => {
			const url = 'https://t.me/cryptopeet_com';
			platform = getPlatformFromUrl({ url });
		});

		test('should convert to Twitter Model', () => {
			expect(platform).toBe('telegram');
		});
	});
});
