var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/launchpartner"
var db = pgp(connectionString)

module.exports = db;