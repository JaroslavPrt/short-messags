import { promisify } from 'util';
import { createConnection, ConnectionOptions, Connection } from 'typeorm';

import { logger } from '@logger';
import { getConnectionOptions } from './config';

const delay = promisify(setTimeout);
const retryDelay: number = 500;
const log = logger(__filename);

let connection: Connection;
let retryCount: number = 0;

export function tryCreateConnection(config: ConnectionOptions): Promise<Connection> {
  return createConnection(config).catch((err) => {
    retryCount += 1;

    if (err instanceof Error) {
      log.error(`${err.message}. retrying db connection: (${retryCount}) +${retryDelay}ms`);
    }

    return delay(retryDelay).then(() => tryCreateConnection(config));
  });
}

export async function getConnection(options: ConnectionOptions) {
  if (!connection) {
    if (!options) {
      throw new Error('missing credentials options');
    }
    const config = getConnectionOptions(options);
    connection = await tryCreateConnection(config);
  }
  return connection;
}
