
import Sequelize from 'sequelize';
export const sequelize = new Sequelize('postgres', 'postgres', '1234567', {
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
export const Op = Sequelize.Op;
// Or you can simply use a connection uri
// export const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/postgres');
