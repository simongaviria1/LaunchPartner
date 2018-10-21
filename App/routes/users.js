var express = require('express');
var router = express.Router();

const {loginRequired} = require("../auth/helper");
const passport = require("../auth/local");
const db = require("../db/queries");

// USER LOGIN ROUTES
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log('this is what the DB returned', req.user);
  res
    .status(200)
    .json({user: req.user, message: `${req.user.username} is logged in`});
  return;
});

router.get("/hi", function () {
  console.log( 'Hello there')
});

router.get("/getLoggedinUser", loginRequired, db.getUser);

module.exports = router;