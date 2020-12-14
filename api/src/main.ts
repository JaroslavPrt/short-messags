/* eslint-disable import/first */
// eslint-disable-next-line @typescript-eslint/dot-notation
process.env['NODE_CONFIG_DIR'] = `${__dirname}/config`;

import './bootstrap';

import { getConnection } from '@infra/persistence/connection';
import { Application } from './application';
import { logger } from './logger';

const log = logger(__filename);

async function main() {
  const connection = await getConnection();
  // eslint-disable-next-line no-new
  new Application(connection);
}

main().catch((e) => {
  log.fatal(e, `Couldn't start application`);
});
