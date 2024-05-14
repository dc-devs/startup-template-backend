import { Port } from '../enums';
import { isTestEnv, isProductionEnv } from '../../base/constants/environment';

export const testOrDevPort = isTestEnv ? Port.Test : Port.Development;

export const apppliccaionPort = isProductionEnv
	? Port.Production
	: testOrDevPort;

export const port = process.env.PORT || apppliccaionPort;
