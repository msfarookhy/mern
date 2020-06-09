const { check } = require("express-validator");

exports.userSignUpValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name Is Required"),

  check("email")
    .isEmail()
    .withMessage("Must Be a Valid Email Address"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("password Must Be At Least 6 Characters long")
];

exports.userSigninValidator = [
  check("email")
    .isEmail()
    .withMessage("Must be a valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least  6 characters long")
];
