export default {
  Customer: {
    appPort: 3000,
    logLevel: 'silly',
    database: {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'short-messages',
    },
  },
};
