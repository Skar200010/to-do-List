require('./database.js')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const listRouter = require('./routes/lists');
var taskRoutes = require('./routes/tasks');
const taskDurationRoutes = require('./routes/taskDurations');
//const taskPriorityRoutes = require('./routes/taskPriorities');


const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/',listRouter);
app.use('/', taskRoutes);
app.use('/', usersRouter);
app.use('/', taskDurationRoutes);
//app.use('/', taskPriorityRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  console.log(createError)
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
