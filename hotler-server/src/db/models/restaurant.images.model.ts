import { Model, DataTypes } from "sequelize";

import sequelize from "..";
import Restaurant from "./restaurant.model";
import { RestaurantImagesEnum, StatusEnum } from "../../constants";

class RestaurantImages extends Model {}

RestaurantImages.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: RestaurantImagesEnum,
      comment: "1=Restaurant Images, 2=Featured Images",
    },
    restId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM,
      defaultValue: "1",
      values: StatusEnum,
      comment: "-1=deleted, 0=inactive, 1=active",
    },
  },
  { sequelize, modelName: "RestaurantImages", timestamps: true }
);

/**
 * @model RestaurantImage belongs to a single restaurant.
 */
RestaurantImages.belongsTo(Restaurant, { foreignKey: "restId" });

/* A restaurant can have multiple images */
Restaurant.hasMany(RestaurantImages);

export default RestaurantImages;
