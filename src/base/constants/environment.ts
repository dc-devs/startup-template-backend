import { Environment } from '../enums';

export const environment = process.env.NODE_ENV || Environment.DEVELOPMENT;

export const isTestEnv = environment === Environment.TEST;

export const isProductionEnv = environment === Environment.PRODUCTION;

export const isDevelopmentEnv = environment === Environment.DEVELOPMENT;
