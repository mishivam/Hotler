import { Model, DataTypes } from "sequelize";

import sequelize from "..";
import { RatingEnums } from "../../constants";

class Reviews extends Model {}

Reviews.init(
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
    restId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    rating: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: RatingEnums,
    },
    review: DataTypes.TEXT,
    bookingId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Reviews", timestamps: true }
);

export default Reviews;
