const mysql = require("mysql");

const db = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'mysql0824',
    database : 'ice_db'
})

db.connect();

module.exports = db;

