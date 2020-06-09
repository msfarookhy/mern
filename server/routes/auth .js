const express = require("express");
const router = express.Router();

//import controllers

const { signup, accountActivation, signin } = require("../controllers/auth");

//import Validator
const {
  userSignUpValidator,
  userSigninValidator
} = require("../validators/auth");
const { runValidation } = require("../validators");

router.post("/signup", userSignUpValidator, runValidation, signup);
router.post("/account-activation", accountActivation);
router.post("/signin", userSigninValidator, runValidation, signin);

module.exports = router;
