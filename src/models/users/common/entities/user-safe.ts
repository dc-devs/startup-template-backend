import { User } from '../../../common/@generated/user/user.model';

export type UserSafe = Omit<User, 'password'>;
