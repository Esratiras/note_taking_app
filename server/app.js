const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersNotes = require('./routes/notes');
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
require('dotenv/config')
//mongodb connection


mongoose.connect(process.env.DB_CONNTECTION,{ useNewUrlParser: true, useUnifiedTopology: true}).then( () => {
  console.log('Connected to database ')
})

mongoose.connection.on('open', () => {
  console.log('MongoDb Connected Successfully')
})
mongoose.connection.on('error', (err) => {
  console.log('MongoDb Connection Error',err)
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', indexRouter);
app.use('/', usersNotes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
