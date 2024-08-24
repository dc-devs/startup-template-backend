import { Test, TestingModule } from '@nestjs/testing';
import { KolsResolver } from './kols.resolver';
import { KolsService } from './kols.service';

describe('KolsResolver', () => {
	let resolver: KolsResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [KolsResolver, KolsService],
		}).compile();

		resolver = module.get<KolsResolver>(KolsResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
