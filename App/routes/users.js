const express = require('express');
const router = express.Router();
const {loginRequired} = require("../auth/helper");
const passport = require("../auth/local");
const db = require("../db/queries");

// USER LOGIN ROUTES
router.post("/login", passport.authenticate("local"), (req, res) => {
  // console.log('this is what the DB returned', req.user);
  res
    .status(200)
    .json({user: req.user, message: `${req.user.username} is logged in`});
  return;
});

router.post("/new", db.createUser);
router.get("/logout", loginRequired, db.logoutUser);
router.get("/getLoggedinUser", loginRequired, db.getUser);
router.get("/getProfiles", db.getProfiles);

module.exports = router;