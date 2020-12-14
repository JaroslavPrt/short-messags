import { resolve } from 'path';
import { Connection, ConnectionOptions, createConnection, getConnection as tGetConnection } from 'typeorm';
import { AlreadyHasActiveConnectionError } from 'typeorm/error/AlreadyHasActiveConnectionError';

import { appConfig } from '@config';

export const connectionConfig: ConnectionOptions = {
  type: 'postgres',
  ...appConfig.database,
  synchronize: false,
  migrationsRun: false,
  entities: [resolve(__dirname, './orm-entities/*.{js,ts}')],
};

export function getConnection(): Promise<Connection> {
  return createConnection(connectionConfig).catch((e) => {
    if (e instanceof AlreadyHasActiveConnectionError) {
      return tGetConnection();
    }
    throw e;
  });
}
