const db = require("./index");
const authHelpers = require("../auth/helper");
const passport = require("../auth/local");

function createUser(req, res, next) {
    const hash = authHelpers.createHash(req.body.password);
    console.log("create user hash:", hash);
    db
        .any(`INSERT INTO users (username, password_digest, email, fullName) 
      VALUES ($1, $2, $3, $4) RETURNING users.username, users.email, users.fullName`, [req.body.username, hash, req.body.email, req.body.fullName])
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

function logoutUser(req, res, next) {
    req.logout();
    res
        .status(200)
        .send("log out success");
};

function getUser(req, res, next) {
    // console.log('get user')
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
        .none("UPDATE users SET email=${email}, fullname=${fullName}, stack=${stack}, username=" +
            "${username} WHERE users.id=${userID}", {
        email: req.body.email,
        fullName: req.body.fullName,
        username: req.body.username,
        stack: req.body.stack,
        links: req.body.links,
        userID: req.user.id
    })
        .then(() => {
            res
                .status(200)
                .json({message: "successfully updated user"})
        })
        .catch(err => {
            console.log(`err in editUserProfile`, err)
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
            console.log(`err in getUserProfile`, err)
            res
                .status(500)
                .json({message: `FAILED: getUserProfile`})
        })
}

function getUserID(req, res, next) {
    db.catch(err => {
        console.log(`err fetching userID`, err)
        res
            .status(500)
            .json({message: `error getting userid`})
    })
}

module.exports = {
    createUser,
    logoutUser,
    getUser,
    getProfiles,
    editUserProfile,
    getUserID
};