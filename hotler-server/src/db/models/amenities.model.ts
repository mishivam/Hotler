import { Model, DataTypes } from "sequelize";

import sequelize from "..";
import { AmenitiesEnum, StatusEnum } from "../../constants";

class Amenities extends Model {}

Amenities.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: AmenitiesEnum,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(36),
    },

    status: {
      allowNull: false,
      type: DataTypes.ENUM,
      defaultValue: "1",
      values: StatusEnum,
      comment: "-1=deleted, 0=inactive, 1=active",
    },
  },
  { sequelize, modelName: "Amenities", timestamps: true }
);

export default Amenities;
