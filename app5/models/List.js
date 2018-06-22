/*
CREATE TABLE IF NOT EXISTS tblList (
    id    integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name        varchar(40) NOT NULL CHECK (name <> ''),
    priority    integer NOT NULL,
    description text,
    duedate   date NOT NULL    
);
*/
import { sequelize } from '../sequelize';
import Sequelize from 'sequelize';

export const List = sequelize.define('tblList', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  priority: {
    type: Sequelize.TINYINT
  },
  description: {
    type: Sequelize.TEXT
  },
  duedate: {
    type: Sequelize.DATE
  },
});
