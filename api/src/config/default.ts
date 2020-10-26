export default {
  Customer: {
    appPort: 7000,
    logLevel: 'silly',
    dbConfig: {
      host: 'localhost',
      port: 5432,
      username: 'short_messages',
      password: 'short_messages',
      database: 'short_messages',
      loggerLevel: 'error',
    },
  },
};
