import { resolve } from 'path';
import { ConnectionOptions } from 'typeorm';

const defaultConnectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'postgres',
  entities: [resolve(__dirname, './entities/**/*.{js,ts}')],
  migrations: [resolve(__dirname, './migrations/**/*.{js,ts}')],
  cli: {
    entitiesDir: 'src/db/entities',
    migrationsDir: 'src/db/migrations',
  },
};

export function getConnectionOptions(opts: any): ConnectionOptions {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return { ...defaultConnectionOptions, ...opts };
}
