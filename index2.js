// ---- NPM fetched packages or node js standard libraries ----
const express = require('express');
const bodyParser = require('body-parser');
const spawn = require('child_process').spawn;


// ---- Original code ----
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
    User.findAll({attributes: ['email', 'username']})
        .then( allUsers => {
            res.send(allUsers);
        })
        .catch( error => {
            console.log('There was an error \n\n' + error);
        });
});

app.get('/compute', (req, res) => {
    console.log('Reached the compute route');
    let dataString = "";
    let pyScript = spawn('python', ['./pythonScripts/helloworld.py']);
    pyScript.stdout.on('data', (data) =>{
        console.log('received some data')
        dataString += data.toString();
    });
    pyScript.stdout.on('end', () =>{
        console.log(dataString);
        res.send(dataString);
    });
    
});

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

