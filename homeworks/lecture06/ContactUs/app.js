var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var validator = require('express-validator');
var csrf = require('csurf');

var routes = require('./routes/index');
var contactus = require('./routes/contactus');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validator());
app.use(cookieParser());
app.use(csrf());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/contactus', contactus);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/

// error handlers

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

app.post('/contactus',function(req,res){

  // validate data
  req.assert('fullname', 'Fullname is required').notEmpty();
  req.assert('message', 'Message is required').notEmpty();
  var errors = req.validationErrors();
  if(errors)
  {
    res.render('error', {error: errors, message:'invalid data'});
    return;
  }

  // collect posted data
  var fullname=req.body.fullname;
  var type=req.body.type;
  var message = req.body.message;

  // console log
  console.log('Fullname: '+fullname+', type: '+type + ', message: ' + message);

  // write to file
  fs.writeFile(__dirname + '/data/user-messages.txt', `Fullname: ${fullname}\nType: ${type}\nMessage: ${message}`);

  // render html for thank you message
  res.render('thankyou', { title: 'Thank you' }, function(err, html) {
    if(err)
      return console.log('###### Error while render html: ' + err);
    else
    {
      // send html content to client
      console.log('>>> HTML rendered successfully!');
      res.end(html);
    }
  });
});

app.listen(8080, ()=>{
  console.log("Activated on port: 8080");
});

module.exports = app;
