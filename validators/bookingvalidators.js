import { body } from "express-validator";

export const bookingValidator = [
  body("room_id")
    .notEmpty()
    .withMessage("Room ID is required")
    .isInt()
    .withMessage("Room ID must be a number"),

  body("check_in")
    .notEmpty()
    .withMessage("Check-in date required")
    .isISO8601()
    .withMessage("Invalid date format"),

  body("check_out")
    .notEmpty()
    .withMessage("Check-out date required")
    .isISO8601()
    .withMessage("Invalid date format")
];