// require('dotenv').config();

// import { resolve } from 'path';
// import { ConnectionOptions } from 'typeorm';
// import { TypeormPinoLogger, PinoLoggerOptions } from './TypeormPinoLogger';
// import { DBCredentialsOptions } from './DBCredentialsOptions';

// const {
//   TYPEORM_HOST = 'localhost',
//   TYPEORM_USERNAME = 'admin',
//   TYPEORM_PASSWORD = 'admin',
//   TYPEORM_DATABASE = 'short-messages',
//   TYPEORM_PORT = '5432',
//   TYPEORM_SYNCHRONIZE = false,
//   TYPEORM_LOGGING = true,
//   PINO_LOGGER_LEVEL = 'error',
// } = process.env;

// const connectionOptions: ConnectionOptions & DBCredentialsOptions = {
//   name: 'default',
//   type: 'postgres',
//   host: TYPEORM_HOST,
//   port: parseInt(TYPEORM_PORT, 10),
//   username: TYPEORM_USERNAME,
//   password: TYPEORM_PASSWORD,
//   database: TYPEORM_DATABASE,
//   synchronize: !!TYPEORM_SYNCHRONIZE,
//   logging: !!TYPEORM_LOGGING,
//   entities: [resolve(__dirname, './entity/**/*.{js,ts}')],
//   migrations: [resolve(__dirname, './migration/**/*.{js,ts}')],
//   subscribers: [resolve(__dirname, './subscriber/**/*.{js,ts}')],
//   cli: {
//     entitiesDir: 'src/db/entity',
//     migrationsDir: 'src/db/migration',
//     subscribersDir: 'src/db/subscriber',
//   },
//   encrypt: {
//     enable: true,
//     vaultAddr: '',
//     vaultToken: '',
//     vaultPathPrefix: '',
//   },
// };

// const defaultPinoLoggerOptions: PinoLoggerOptions = {
//   enabled: true,
//   level: PINO_LOGGER_LEVEL,
//   base: null,
//   name: 'slp-db',
// };

// export function getConnectionOptions(credentialsOptions?: DBCredentialsOptions) {
//   const loggerOptions: { level?: string; prettyPrint?: boolean } = {};

//   if (credentialsOptions && credentialsOptions.loggerLevel) {
//     loggerOptions.level = credentialsOptions.loggerLevel;
//     loggerOptions.prettyPrint = credentialsOptions.loggerPrettyPrint;
//   }

//   const logger = new TypeormPinoLogger(Object.assign({}, defaultPinoLoggerOptions, loggerOptions));

//   return Object.assign({}, connectionOptions, credentialsOptions, {
//     logger,
//   });
// }
