var request = require('request');
var cheerio = require('cheerio');

var scraper = {
  url: 'http://arstechnica.com',
  run: function(cb) {
    request(this.url, function(err, response, html) {
      var $ = cheerio.load(html);
      var result = [];

      $('article > header').each(function(i, element){
        var result = {
          title :$(element).find('h2 > a').text(),
          excerpt :$(element).find('p.excerpt').text(),
          author: $(element).find('p.byline > a').text(),
          url :$(element).find('h2 > a').attr('href'),
        }
        

        if (cb) { 
          cb(result); 
        }
      });
    });
  }
}

module.exports = scraper;
