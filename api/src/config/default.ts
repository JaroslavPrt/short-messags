export default {
  Customer: {
    appPort: 7000,
    logLevel: 'silly',
    dbConfig: {
      host: 'localhost',
      port: 5984,
      dbName: 'customers',
    },
    credit: {
      initialLimit: 100,
      initialDays: 1,
    },
  },
};
