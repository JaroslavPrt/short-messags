import { config } from '../config';
import { getConnectionOptions } from './config';

const options = getConnectionOptions(config.dbConfig);

module.exports = options;
