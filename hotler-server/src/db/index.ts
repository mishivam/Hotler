import { Sequelize } from "sequelize";

// import dbConfig from "@config/db.config.js";
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

export const connectToDb = async (cb?: () => void) => {
  try {
    cb && cb();
    await sequelize.authenticate();

    console.log(`\n\t✅ [success]: connected to database!  `);
  } catch (e) {
    console.log("❌ [error]: can't connect to db! \n", e);
    process.exit(1);
  }
};

export default sequelize;
