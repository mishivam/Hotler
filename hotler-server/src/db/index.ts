import { Sequelize } from "sequelize";

import dbConfig from "../config/db.config";
import logger from "../utils/logger.utils";

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

export const connectToDb = async (cb?: () => void) => {
  try {
    cb && cb();
    await sequelize.authenticate();

    logger.info(`✅ [success]: connected to database!  `);
  } catch (e) {
    logger.error("❌ [error]: can't connect to db! ", e);
    process.exit(1);
  }
};

export default sequelize;
