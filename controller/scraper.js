var request = require('request');
var cheerio = require('cheerio');

var url = 'http://arstechnica.com';
var scraper = {

  run: function(url) {
    request(url, function(err, response, html) {
      var $ = cheerio.load(html);
      var result = [];

      $('article > header').each(function(i, element){
        // console.log($(element));
        var title = $(element).find('h2 > a').text();
        var excerpt = $(element).find('p.excerpt').text();
        var author = $(element).find('p.byline > a').text();

        console.log(title);
        console.log(excerpt);
        console.log(author);
        console.log('-------------------');
      });
    });
  }
}

//module.exports = scraper;

scraper.run(url);