var request = require('request');
var cheerio = require('cheerio');



var scrape = new Promise (function(resolve, reject) {
  var url= 'http://arstechnica.com';
  request(url, function(err, response, html) {
    if (err) {
      reject(err);
    }
    else {
      var $ = cheerio.load(html);
      var result = [];

      $('article > header').each(function(i, element){
        var a = {
          title :$(element).find('h2 > a').text(),
          excerpt :$(element).find('p.excerpt').text(),
          author: $(element).find('p.byline > a').text(),
          url :$(element).find('h2 > a').attr('href'),
          timestamps: Date.now()
        }
        result.push(a);
      });

      resolve(result);
    }
  });


});

module.exports = scrape;

