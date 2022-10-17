const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express');

var articles = [];


var app = express();

const url = 'http://www.bologna.yildiz.edu.tr/index.php?r=program/view&id=37&aid=24';

axios(url).then(response => {
const html = response.data;
const $ = cheerio.load(html);

$('tr', html).each(function()
{
const title = $(this).text();
articles.push({
    title
});


});

console.log(articles);


});

app.listen(3000);