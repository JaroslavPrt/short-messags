import '../../bootstrap';

import { resolve } from 'path';
import { ConnectionOptions } from 'typeorm';

import { connectionConfig } from './connection';

const config: ConnectionOptions = {
  ...connectionConfig,
  migrations: [resolve(__dirname, './migrations/*.{js,ts}')],
  cli: {
    migrationsDir: './src/infrastructure/persistence/migrations',
  },
};

module.exports = config;
