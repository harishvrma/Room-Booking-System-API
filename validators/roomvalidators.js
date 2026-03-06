import { body } from "express-validator";

export const roomValidator = [

  body("room_number")
    .notEmpty()
    .withMessage("Room number is required")
    .isInt()
    .withMessage("Room number must be a number"),

  body("type")
    .notEmpty()
    .withMessage("Room type is required")
    .isIn(["single", "double", "suite", "Delux"])
    .withMessage("Room type must be single, double, suite, or delux"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ gt: 0 })
    .withMessage("Price must be greater than 0")

];