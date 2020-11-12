import { resolve } from 'path';
import { ConnectionOptions } from 'typeorm';

const defaultConnectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'short-message',
  entities: [resolve(__dirname, './entity/**/*.{js,ts}')],
  migrations: [resolve(__dirname, './migration/**/*.{js,ts}')],
  subscribers: [resolve(__dirname, './subscriber/**/*.{js,ts}')],
  cli: {
    entitiesDir: 'src/db/entity',
    migrationsDir: 'src/db/migration',
    subscribersDir: 'src/db/subscriber',
  },
};

export function getConnectionOptions(opts: {}): ConnectionOptions {
  return { ...defaultConnectionOptions, ...opts };
}
