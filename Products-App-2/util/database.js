const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'complete node',
    password:'root'
});

module.exports = pool.promise();