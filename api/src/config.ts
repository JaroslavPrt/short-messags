/* eslint-disable class-methods-use-this */

import { util, get, has } from 'config';
import { TLogLevelName } from 'tslog';

export enum Environments {
  development = 'development',
  production = 'production',
}

class Config {
  get nodeEnv(): Environments {
    return (util.getEnv('NODE_ENV') as Environments) ?? Environments.development;
  }

  get LogLevel(): TLogLevelName {
    return get('Customer.logLevel') || 'silly';
  }

  byKey(key: string): string | number | boolean {
    return has('key') && get(key);
  }
}

export const config = new Config();
