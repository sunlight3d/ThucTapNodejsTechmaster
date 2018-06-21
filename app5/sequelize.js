const Sequelize = require('sequelize');
export const sequelize = new Sequelize('postgres', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Or you can simply use a connection uri
// export const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/postgres');
