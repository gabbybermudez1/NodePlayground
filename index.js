const express = require('express');
const app = express();
const fs  = require('fs');

app.use(express.static(__dirname + '/public'));

app.use((req, res, next)=>{
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`
    fs.appendFile('fiddler.log', log + '\n',  (error) => {
        console.log('There was an error that occurred');
        console.log(error);
    });
    next();
})

app.get('/', (req,res) => {
    res.send('<h1> Hello World </h1>')
});

app.get('/help', (req, res) => {
    res.render()
})

app.listen(3001, ()=>{
    console.log('Express web server is beginning');
})