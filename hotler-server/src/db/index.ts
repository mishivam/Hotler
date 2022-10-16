import { Sequelize } from "sequelize";

import dbConfig from "../config/db.config";

const { database, username, password, dialect, host } = dbConfig;

const sequelize = new Sequelize(
  database as string,
  username as string,
  password,
  {
    dialect,
    host,
    logging: false,
  }
);

export default sequelize;
