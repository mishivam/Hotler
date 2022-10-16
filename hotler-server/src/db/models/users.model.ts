import { Model, DataTypes } from "sequelize";

import sequelize from "..";

import Bookings from "./bookings.models";
import Transactions from "./transactions.model";

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(36),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(36),
      allowNull: false,
    },
    dob: DataTypes.DATEONLY,
    mobileNo: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    profilePic: DataTypes.STRING,
    address: DataTypes.TEXT,
    role: {
      allowNull: false,
      type: DataTypes.ENUM,
      defaultValue: "1",
      values: ["1", "2", "3"],
      comment: "1=customer, 2=hotelowner, 3=super admin",
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM,
      defaultValue: "1",
      values: ["-1", "0", "1"],
      comment: "-1=deleted, 0=inactive, 1=active",
    },
    balance: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
  },
  { sequelize, modelName: "Users", timestamps: true }
);

/* A single booking bolongs to a single user. While a user can have multiple bookings. */
Users.hasMany(Bookings);
/* 
  A single booking bolongs to a single user. While a user can have multiple bookings.
*/
Bookings.belongsTo(Users, { foreignKey: "userId" });

/* 
  A transactions belongs to a single user but a single user can make multiple transactions.
*/
Users.hasMany(Transactions);

/* 
  A transactions belongs to a single user but a single user can make multiple transactions.
*/
Transactions.belongsTo(Users, { foreignKey: "userId" });

export default Users;
