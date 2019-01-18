const axios = require('axios');
const cheerio = require('cheerio');
const rp = require('request-promise');



let url = "https://www.indeed.ca/jobs?q=programmer&l=Toronto%2C+ON&limit=20&ts=1547838412149&rq=1&fromage=last";
let testHTML = `<h1 class="headerThing"> Hello World </h1><h1>What is going on?? </h1>`;
let testHTML2= '<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>';


const printHTML = (html) =>{
    let jobs= [];
    let $ = cheerio.load(html);
    $('.jobtitle').each( (index, element) =>{
        jobs[index] = $(element).text();
    });
    console.log('all jobs pushed');
    console.log(jobs);
    console.log(jobs.length)
    return jobs;
};

axios.get(url)
    .then(response =>{
        let html = response.data;
        printHTML(html);
    })
    .catch( err =>{
        console.log('There was an error in fetching the requisite data');
        console.log(err);
    });

// rp(url)
//     .then( response =>{
//         printHTML(response);
//     });

// Testing the each function of cheerio
// const fruits = [];
// let $= cheerio.load(testHTML2);
// $('li').each(function(i, element){
//   fruits[i] = $(element).text();
// });
// fruits.join(', ');
// console.log(fruits);