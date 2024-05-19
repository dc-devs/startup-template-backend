import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AuthModule } from './models/auth/auth.module';
import { UsersModule } from './models/users/users.module';
import { GraphQLModule, ConfigModule } from './base/app/modules';

@Module({
	imports: [UsersModule, AuthModule, ConfigModule, GraphQLModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
