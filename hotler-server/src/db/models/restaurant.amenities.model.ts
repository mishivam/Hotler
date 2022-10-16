import { Model, DataTypes } from "sequelize";

import sequelize from "..";

class RestaurantAmenities extends Model {}

RestaurantAmenities.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    restId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    amenityId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  { sequelize, modelName: "RestaurantAmenities", timestamps: true }
);

export default RestaurantAmenities;
