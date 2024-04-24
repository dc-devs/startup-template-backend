import { User } from '../../../@generated/user/user.model';

export type UserSafe = Omit<User, 'password'>;
