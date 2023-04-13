// Welcome to Shep's Backend Project. Super Organzied. Everything Commented. Super Readable.

//!-----IMPORTS-----!
const initSql = require('sql.js');

const SQL = await initSql({
    locateFile: file => `https://sql.js.org/dist${file}`
});

const db = 'information.db'

// !-----Creating the connection-----!
const data = new SQL.Database(db);