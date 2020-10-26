// import { createConnection, ConnectionOptions, Connection } from 'typeorm';
// import { promisify } from 'util';

// import { NoCredentialsOptionsError } from './error/NoCredentialsOptionsError';
// import { DBCredentialsOptions } from './DBCredentialsOptions';
// export { DBCredentialsOptions } from './DBCredentialsOptions';
// import { getConnectionOptions } from './config';
// import { TypeormPinoLogger, PinoLoggerOptions } from './TypeormPinoLogger';

// const delay = promisify(setTimeout);

// let connection: Connection;

// let retryCount: number = 0;
// const retryDelay: number = 500;

// export function tryCreateConnection(config: ConnectionOptions): Promise<Connection> {
//   return createConnection(config).catch((err) => {
//     retryCount += 1;

//     if (config.logger instanceof TypeormPinoLogger) {
//       config.logger.log('error', `${err.message}. Retrying (${retryCount}) +${retryDelay}ms`);
//     }

//     return delay(retryDelay).then(() => {
//       return tryCreateConnection(config);
//     });
//   });
// }

// export async function getConnection(credentialsOptions?: DBCredentialsOptions) {
//   if (!connection) {
//     if (!credentialsOptions) {
//       throw new NoCredentialsOptionsError('credentialsOptions');
//     }

//     const config = getConnectionOptions(credentialsOptions);
//     connection = await tryCreateConnection(config);
//   }

//   return connection;
// }
