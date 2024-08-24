import { Test, TestingModule } from '@nestjs/testing';
import { TwitterProfilesResolver } from './twitter-profiles.resolver';
import { TwitterProfilesService } from './twitter-profiles.service';

describe('TwitterProfilesResolver', () => {
	let resolver: TwitterProfilesResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [TwitterProfilesResolver, TwitterProfilesService],
		}).compile();

		resolver = module.get<TwitterProfilesResolver>(TwitterProfilesResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
