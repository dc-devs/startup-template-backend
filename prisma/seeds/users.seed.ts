import { faker } from '@faker-js/faker';
import { UserRole } from '@prisma/client';
import { encodePassword } from '../../src/models/users/common/utils';

const users = [];

export const password = '12345678';

const firstUser = {
	email: 'david@startup-template.com',
	password: encodePassword(password),
	role: UserRole.SUPER_ADMIN,
};
users.push(firstUser);

const secondUser = {
	email: 'demo@startup-template.com',
	password: encodePassword(password),
	role: UserRole.ADMIN,
};
users.push(secondUser);

const thirdUser = {
	email: 'admin@startup-template.com',
	password: encodePassword(password),
	role: UserRole.ADMIN,
};
users.push(thirdUser);

const fourthUser = {
	email: 'test@startup-template.com',
	password: encodePassword(password),
	role: UserRole.ADMIN,
};
users.push(fourthUser);

let count = 1;
const userCount = 53;

while (count <= userCount) {
	const user = {
		email: faker.internet.email(),
		password: encodePassword(faker.internet.password()),
	};

	users.push(user);
	count += 1;
}

const allUsersCount = users.length;

export { users, firstUser, secondUser, thirdUser, fourthUser, allUsersCount };
