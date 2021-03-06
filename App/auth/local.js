const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const db = require("../db/index");
const init = require("./passport");
const authHelpers = require("./helper");

const options = {};

init();

passport.use(
// getting username and password from req.body
new LocalStrategy(options, (username, password, done) => {
    console.log("trying to authenticate", username);
    db
        .any("SELECT * FROM users WHERE username=$1", [username])
        .then(rows => {
            const user = rows[0];
            if (!user) {
                return done(null, false);
            }
            if (!authHelpers.comparePass(password, user.password_digest)) {
                return done(null, false);
            } else {
                return done(null, user);
            }
        })
        .catch(err => {
            console.log("error here: ", err);
            return done(err);
        });
}));

module.exports = passport;