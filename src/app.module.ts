import { join } from 'path';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { environment } from './base/common/constants';
// import { corsOptions } from './base/server/config';
import { AuthModule } from './models/auth/auth.module';
import { UsersModule } from './models/users/users.module';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
	imports: [
		UsersModule,
		AuthModule,
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ['.env', `.env.${environment}`],
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			sortSchema: true,
			// plugins,
			// debug: false,
			// playground: false,
			// cors: corsOptions,
			context: ({ req, res }) => ({ req, res }),
			formatError: (error: GraphQLError) => {
				const graphQLFormattedError: GraphQLFormattedError = {
					message: !error.message.includes('prisma')
						? error.message
						: 'Database Error',
					extensions: error.extensions,
				};

				return graphQLFormattedError;
			},
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
