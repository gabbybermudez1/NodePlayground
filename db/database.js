const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    username: 'root',
    password: 'Gagoka1!'
});


module.exports = {
    db
}