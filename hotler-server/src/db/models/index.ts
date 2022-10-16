import Users from "./users.model";
import Reviews from "./reviews.model";
import Bookings from "./bookings.models";
import Amenities from "./amenities.model";
import Restaurant from "./restaurant.model";
import Transactions from "./transactions.model";
import RestaurantImages from "./restaurant.images.model";
import RestaurantAmenities from "./restaurant.amenities.model";

import logger from "../../utils/logger.utils";

const models = [
  Users,
  Bookings,
  Reviews,
  Amenities,
  Restaurant,
  Transactions,
  RestaurantImages,
  RestaurantAmenities,
];

export {
  Users,
  Bookings,
  Reviews,
  Amenities,
  Restaurant,
  Transactions,
  RestaurantImages,
  RestaurantAmenities,
};

export const connectToDb = async (cb?: () => void) => {
  try {
    await Promise.all(
      models.map(async (model) => await model.sync({ force: false }))
    );
    cb && cb();
    logger.info(`✅ [success]: connected to database!  `);
  } catch (e) {
    logger.error("❌ [error]: can't connect to db! ", e);
    process.exit(1);
  }
};
