/* eslint-disable import/first */
/* eslint-disable class-methods-use-this */

// eslint-disable-next-line @typescript-eslint/dot-notation
process.env['NODE_CONFIG_DIR'] = `${__dirname}/config`;

import { get, has, util } from 'config';
import { TLogLevelName } from 'tslog';

// eslint-disable-next-line no-shadow
export enum AppEnvironments {
  development = 'development',
  production = 'production',
}

class Config {
  get nodeEnv(): AppEnvironments {
    return (util.getEnv('NODE_ENV') as AppEnvironments) ?? AppEnvironments.development;
  }

  get appPort(): number {
    return get('Customer.appPort') ?? 3000;
  }

  get LogLevel(): TLogLevelName {
    return get('Customer.logLevel') || 'silly';
  }

  get database(): {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  } {
    return get('Customer.database');
  }

  byKey(key: string): string | number | boolean {
    return has('key') && get(key);
  }
}

export const config = new Config();
