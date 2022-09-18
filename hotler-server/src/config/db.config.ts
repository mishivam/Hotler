import { Dialect } from "sequelize";

import { NODE_ENV, DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } from "./env.config";

const sequelizeConfig = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres" as Dialect,
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres" as Dialect,
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres" as Dialect,
  },
};

const dbConfig =
  typeof NODE_ENV === "string"
    ? sequelizeConfig[NODE_ENV as keyof typeof sequelizeConfig]
    : sequelizeConfig.development;

export default dbConfig;
