var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var morgan = require('morgan');


var bodyParser = require('body-parser');

app.use(morgan('dev'));

var routes = require('./routes/index.js')

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(port, function(){
  console.log("Listening on port " + port);
});
