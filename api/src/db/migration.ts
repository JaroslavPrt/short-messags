// // import { tryCreateConnection } from './connection';
// // import { getConnectionOptions } from './config';
// import { getConnection } from 'package:db/index';
// import { config } from 'package:config';

// const [, , method = '--run'] = process.argv || [];
// // const config = getConnectionOptions();

// getConnection(config.db).then(async (connection) => {
//   try {
//     if (method === '--run') {
//       await connection.runMigrations({ transaction: true });
//     } else if (method === '--revert') {
//       await connection.undoLastMigration({ transaction: true });
//     }
//   } catch (error) {}
// });
