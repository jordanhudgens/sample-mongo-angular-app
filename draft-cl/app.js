/**
 * Module dependencies.
 */

// For DB
var mongoose = require('mongoose');
var express = require('express')
    , http = require('http')
    , path = require('path');

var favicon = require('static-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/listings');

require('./models/Listings');
require('./models/Questions');

var routes = require('./routes/index')
    , user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', user);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// Error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

