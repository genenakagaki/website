// node modules
var express        = require('express');
var bodyParser     = require('body-parser');
var compression    = require('compression');
var morgan         = require('morgan');
var swig           = require('swig');

// to resolve path
var path = require('path');

var app = express();

var dev = true;
if (dev) {
    app.use(morgan('dev'));
    console.log('App is in development settings');
}
else {
    app.use(compress());
    console.log('App is in release settings');
}

// bodyParser
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// views
app.engine('html', swig.renderFile);
app.set('views', './serverModules/core/views');
app.set('view engine', 'html');

// set routes
require('./serverModules/core/routes/public.server.routes')(app);
require('./serverModules/mail/routes/mail.server.routes')(app);

// set path for static files
app.use(express.static(path.resolve(__dirname + '/public')));

console.log(path.resolve(__dirname + './public'));

app.get(/.+/, function(req, res) {
    res.redirect('/');
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server is listening on port: ' + port);

module.exports = app;