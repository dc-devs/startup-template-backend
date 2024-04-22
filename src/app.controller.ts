import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './models/users/users.service';
import { User } from './models/users/entities/user.entity';

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly usersService: UsersService,
	) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Get('users/:id')
	async findOne(@Param('id') id: string): Promise<User> {
		const user = await this.usersService.findOne({
			id: Number(id),
		});
		console.log(user);

		return user;
	}
}
