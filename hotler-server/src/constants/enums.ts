export const LocationTypeEnum = [
  "apartment",
  "campsite",
  "house",
  "room",
  "spaceship",
  "villa",
  "underwater",
];

/**
 ** -1=deleted, 0=inactive, 1=active
 */
export const StatusEnum = ["-1", "0", "1"];

export const AmenitiesEnum = [
  "AccommodationDetails",
  "SpaceSurvival",
  "Outdoors",
];

/**
 ** 1 = credited
 ** 2 = debited
 */
export const TransactionTypesEnum = ["1", "2"];

export const RatingEnums = ["ONE", "TWO", "THREE", "FOUR", "FIVE"];

/**
 * @value 1 = Restaurant Images
 * @value 2 = Featured Images
 */
export const RestaurantImagesEnum = ["1", "2"];

export const HttpStatusCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  INTERNAL_SERVER: 500,
};
