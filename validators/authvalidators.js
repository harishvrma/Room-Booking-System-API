import { body } from "express-validator";

export const registerValidator = [
    body("name")
    .notEmpty()
    .withMessage("Name is required"),

    body("email")
    .isEmail()
    .withMessage("valid email required"),

    body("password")
    .isLength({min:6})
    .withMessage("Min length 6"),
];

export const loginValidator = [
    body("email")
    .isEmail()
    .withMessage("Valid email required"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
]
