import { Model, DataTypes } from "sequelize";

import sequelize from "..";
import { TransactionTypesEnum } from "../../constants";

class Transactions extends Model {}

Transactions.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: TransactionTypesEnum,
    },
    reason: DataTypes.STRING,
  },
  { sequelize, modelName: "Bookings", timestamps: true }
);

// const model = `id:t=SUUID|dV=SUUIDV4|aN=false|pK=true,userId:t=SUUID|aN=false,date:t=S`;

export default Transactions;
