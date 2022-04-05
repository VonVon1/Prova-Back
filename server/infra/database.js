const pgp = require('pg-promise')();
const db = pgp({
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	database: process.env.DN_NAME
});

module.exports = db;

console.log(process.env.DB_USER);