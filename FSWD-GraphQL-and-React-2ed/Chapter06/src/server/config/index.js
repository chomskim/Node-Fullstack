module.exports = {
  development: {
    username: 'devuser',
    password: 'dev2hufs',
    database: 'graphbook_dev',
    host: '172.30.1.39',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    host: process.env.host,
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    logging: false,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
