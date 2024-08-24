import { PrismaClient } from '@prisma/client';
import { users, kols, twitterProfiles } from './seeds';

const prisma = new PrismaClient();

const main = async () => {
	await prisma.user.createMany({
		data: [...users],
	});

	await prisma.kol.createMany({
		data: [...kols],
	});

	await prisma.twitterProfile.createMany({
		data: [...twitterProfiles],
	});
};

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
