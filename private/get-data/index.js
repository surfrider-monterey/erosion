var request = require('request');
var cheerio = require('cheerio');
var _ = require('underscore');
var fs = require('fs');
var sharp = require('sharp');

var imageUrl = 'http://www.californiacoastline.org/cgi-bin/image.cgi?mode=sequential&flags=0&year=current&image=';
var timeUrl = 'http://www.californiacoastline.org/cgi-bin/timecompare.cgi?flags=0&year=current&';
var min = 201500461;
var max = 201500823;
var current = min;

var data = {};

var makeRequest = function() {
  request(imageUrl + current, function (error, response, body) {
    var $ = cheerio.load(body);
    var image = {};
    image.lat = parseFloat($('form[action="/cgi-bin/timecompare.cgi"] [name=latdeg]').attr('value'));
    image.lon = parseFloat($('form[action="/cgi-bin/timecompare.cgi"] [name=longdeg]').attr('value')) * -1;
    image.images = {};
    var arguments = 'image=' + current + '&latdeg=' + image.lat + '&longdeg=' + image.lon;
    request(timeUrl + arguments, function (error, response, body) {
      var $ = cheerio.load(body);
      var count = 0;
      $('td').each(function() {
        if($(this).text().search('Dataset') > -1) {
          var title = $(this).text().replace(' Dataset', '').replace('(Hide)', '').replace('Current', 2015);
          title = parseInt(title.trim());
          var yearImage = $(this).parents('table').prev('table').find('tr:nth-child(1) td:nth-child(4) img').attr('src');
          var id = yearImage.split('/').pop().replace('.JPG', '');
          image.images['y' + title] = {
            id : id,
            year : title
          };
        }
      });
      data[current] = image;
      current++;
      console.log(current);
      if(current < max) {
        makeRequest();
      }
      else {
        fs.writeFileSync('../../src/data/images.json', JSON.stringify(data));
      }
    });
  });
}

makeRequest();
