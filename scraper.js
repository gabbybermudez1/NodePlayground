const axios = require('axios');
const cheerio = require('cheerio');


axios.get('http://sites.cs.queensu.ca/courses/cisc235/')
    .then( response => {
        let html = response.data; 
        let $ = cheerio.load(html);
        console.log($("a").html());
    })
    .catch( err => {
        console.log(err);
    });



