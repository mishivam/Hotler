import { Model, DataTypes } from "sequelize";

import sequelize from "..";
import { LocationTypeEnum, StatusEnum } from "../../constants";

class Restaurant extends Model {}

Restaurant.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    noOfRooms: DataTypes.SMALLINT,
    price: {
      type: DataTypes.FLOAT(6),
      allowNull: false,
      defaultValue: 0,
    },
    isFeatured: { type: DataTypes.BOOLEAN, defaultValue: false },
    lastAvailableDate: DataTypes.DATE,
    discount_percentage: {
      type: DataTypes.FLOAT,
      set: (val: string) => parseFloat(val) / 100,
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM,
      defaultValue: "1",
      values: StatusEnum,
      comment: "-1=deleted, 0=inactive, 1=active",
    },
    locationType: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: LocationTypeEnum,
    },
  },
  { sequelize, modelName: "Restaurants", timestamps: true }
);

export default Restaurant;
