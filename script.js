// Welcome to Shep's Backend Project. Super Organzied. Everything Commented. Super Readable.

//!-----IMPORTS-----!
const initSql = require('sql.js');

// Found on DOCS, I wouldnt have know what is wrong
const SQL = initSql({
    locateFile: file => `https://sql.js.org/dist${file}`
});

const db = 'information.db'

// !-----Creating the connection-----!
const data = new SQL.Database(db);