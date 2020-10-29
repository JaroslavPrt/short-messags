import { ConnectionOptions } from 'typeorm';

const defaultConnectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'short-message',
};

export function getConnectionOptions(opts: {}): ConnectionOptions {
  return { ...defaultConnectionOptions, ...opts };
}
