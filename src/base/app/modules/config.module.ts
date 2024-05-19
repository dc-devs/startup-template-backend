import { environment } from '../../common/constants';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

export const ConfigModule = NestConfigModule.forRoot({
	isGlobal: true,
	envFilePath: ['.env', `.env.${environment}`],
});
