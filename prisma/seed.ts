import { PrismaClient } from '@prisma/client';
import { users } from './seeds';

const prisma = new PrismaClient();

const main = async () => {
	console.log(users);
	await prisma.user.createMany({
		data: [...users],
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
