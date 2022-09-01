var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mascotasRouter = require('./routes/mascotas');
var personasRouter = require('./routes/personas');
var indexRouter = require('./routes/index')

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)
app.use('/mascotas', mascotasRouter);
app.use('/users', personasRouter);

module.exports = app;
