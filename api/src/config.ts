/* eslint-disable import/first */
/* eslint-disable class-methods-use-this */

// eslint-disable-next-line @typescript-eslint/dot-notation
process.env['NODE_CONFIG_DIR'] = `${__dirname}/config`;

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

  get appPort(): number {
    return get('Customer.appPort') ?? 3000;
  }

  get LogLevel(): TLogLevelName {
    return get('Customer.logLevel') || 'silly';
  }

  byKey(key: string): string | number | boolean {
    return has('key') && get(key);
  }
}

export const config = new Config();
