const db = require("./index");
const authHelpers = require("../auth/helper");
const passport = require("../auth/local");

function createUser(req, res, next) {
    const hash = authHelpers.createHash(req.body.password);
    db
        .any(`INSERT INTO users (username, password_digest, name, bio, profile_pic) 
      VALUES ($1, $2, $3, $4, $5) RETURNING users.username, users.name, users.bio, users.profile_pic, users.id`, [req.body.username, hash, req.body.name, req.body.bio, req.body.profile_pic])
        .then((data) => {
            res
                .status(200)
                .json({data: data[0]})
        })
        .catch(err => {
            console.log(err);
            res
                .status(500)
                .json({message: `failed${err}`})
        })
}

function loginUser(req, res, next) {
    passport.authenticate("local", {})
}

function logoutUser(req, res, next) {
    req.logout();
    res
        .status(200)
        .send("log out success");
};

function getUser(req, res, next) {
    db
        .one("SELECT * FROM users WHERE username=${username}", {username: req.user.username})
        .then(data => {
            res
                .status(200)
                .json({user: data});
        })
};

// user Profile functions
function editUserProfile(req, res, next) {
    db
        .none("UPDATE users SET profile_pic=${user_pic}, name=${user_name}, bio=${user_bio} WHE" +
            "RE users.id=${userID}", {
        user_pic: req.body.user_pic,
        user_name: req.body.user_name,
        user_bio: req.body.user_bio,
        userID: req.body.id
    })
        .then(() => {
            res
                .status(200)
                .json({message: "successfully updated user"})
        })
        .catch(err => {
            res
                .status(500)
                .json({message: `FAILED: editUserProfile`})
        })
}

function getProfiles(req, res, next) {
    db
        .any("SELECT username, profile_pic, bio FROM users")
        .then(data => {
            res
                .status(200)
                .json({status: 'success', data: data, message: 'Fetched user Profile'})
        })
        .catch(err => {
            res
                .status(500)
                .json({message: `FAILED: getUserProfile`})
        })
}

function getUserID(req, res, next) {
    db.catch(err => {
        res
            .status(500)
            .json({message: `error getting userid`})
    })
}

module.exports = {
    createUser,
    loginUser,
    logoutUser,
    getUser,
    getProfiles,
    editUserProfile,
    getUserID
};