import { config } from '@config';
import { getConnectionOptions } from './config';

const options = getConnectionOptions(config.db);

module.exports = options;
