/* eslint-disable class-methods-use-this */
import config from 'config';
import { TLogLevelName } from 'tslog';

// eslint-disable-next-line no-shadow
export enum AppEnvironments {
  development = 'development',
  production = 'production',
}

class AppConfig {
  get nodeEnv(): AppEnvironments {
    return (config.util.getEnv('NODE_ENV') as AppEnvironments) ?? AppEnvironments.development;
  }

  get appPort(): number {
    return config.get('Customer.appPort') ?? 3000;
  }

  get LogLevel(): TLogLevelName {
    return config.get('Customer.logLevel') ?? 'silly';
  }

  get database(): {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  } {
    return config.get('Customer.database');
  }

  byKey(key: string): string | number | boolean {
    return config.has('key') && config.get(key);
  }
}

export const appConfig = new AppConfig();
