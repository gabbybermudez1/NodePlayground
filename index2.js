const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// const db = require('./db/database');

const app  = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host:'localhost',
    username: 'root',
    password: 'Gagoka1!'
});


let sql = 'SELECT customerID, gender, tenure FROM cisc_251.churn_data LIMIT 50;';

db.connect((err) =>{
    if (err){
        throw err;
    }
    console.log('Successfully connected');
});


// db.query(sql , (err, result, fields) => {
//     if (err) throw err;
//     console.log(result);
//   });
