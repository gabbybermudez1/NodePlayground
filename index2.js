//  ---- npm fetched packages ----
const express = require('express');
const bodyParser = require('body-parser');

//  ---- Configuration packages ----
const {db} = require('./config/database');
const {User} = require('./models/users');


const app = express();
const port = process.env.port || 8080;

app.use(bodyParser.json());

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.get('/', (req, res) =>{
    res.send('Home page');
});


app.get('/users', (req, res) => {
    User.findAll({attributes: ['email', 'password']})
        .then( allUsers => {
            res.send(allUsers);
        })
        .catch( error => {
            console.log('There was an error \n\n' + error);
        });
});



app.listen(port, () => {
    console.log('Server listening on port' + port);
});

