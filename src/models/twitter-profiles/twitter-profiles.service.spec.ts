import { Test, TestingModule } from '@nestjs/testing';
import { TwitterProfilesService } from './twitter-profiles.service';

describe('TwitterProfilesService', () => {
	let service: TwitterProfilesService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [TwitterProfilesService],
		}).compile();

		service = module.get<TwitterProfilesService>(TwitterProfilesService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
