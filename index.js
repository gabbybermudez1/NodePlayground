const express = require('express');
const app = express();
const fs  = require('fs');
const bodyParser = require("body-parser");

// importing mongoose with the preset configurations
const mongoose = require('./db/mongoose');
const {generateAuthToken}  = require('./helperFunctions');

// importing the User schema to be used here
const {User} = require('./models/User');

// bodyParser is middleware that will allow us to receive JSON body post requests
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('<h1> Hello World </h1>')
});


// an object with username and password attributes can be retrieved with req.body.username and req.body.password
// Remember: 
//  Querying is done with the Model. Saving is done via the individual document.
app.post('/users/', (req, res) => {
    let user = new User({
        username: req.body.username,
        password: req.body.password,
        token: []
    });

    User.findOne({username: user.username})
        .then( retrievedUsername => {
            if (retrievedUsername == null){
                let newToken = generateAuthToken(user.username, user.password);
                user.token = [{accessType: 'auth', authToken: newToken}];
                user.save()
                    .then( savedDoc => res.header('x-auth', newToken).send(user))
                    .catch( e => res.status(400).send(e));    
            }
            else{
                res.send("That user already exists! Please Try again!");
            }
        })
        .catch( e => res.status(400).send(e));
});


app.listen(8080, ()=>{
    console.log('Express web server is beginning');
});
