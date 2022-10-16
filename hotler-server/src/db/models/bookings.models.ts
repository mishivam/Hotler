import { Model, DataTypes } from "sequelize";

import sequelize from "..";
import { StatusEnum } from "../../constants";

import Restaurant from "./restaurant.model";

class Bookings extends Model {}

Bookings.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    restId: {
      allowNull: false,
      type: DataTypes.UUID,
    },

    checkInDate: {
      allowNull: false,
      type: DataTypes.DATEONLY,
    },

    checkOutDate: {
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
    totalCost: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.FLOAT,
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM,
      defaultValue: "1",
      values: StatusEnum,
      comment: "-1=deleted, 0=inactive, 1=active",
    },
  },
  { sequelize, modelName: "Bookings", timestamps: true }
);

/* 
  A restaurant can have multiple bookings but a booking can only belongs to a single restaurant.
*/
Bookings.belongsTo(Restaurant, { foreignKey: "restId" });

/* A restaurant can have multiple bookings but a booking can only belongs to a single restaurant. */
Restaurant.hasMany(Bookings);

export default Bookings;
