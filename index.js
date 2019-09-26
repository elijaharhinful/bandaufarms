var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
urlencodedparser = bodyParser.urlencoded({extended: false});
app.use('/public',express.static('public'));

app.set('port', process.env.PORT || 5000);

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/index', function (req, res) {
    res.render('index');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/farming-practice', function (req, res) {
    res.render('farming-practice');
});

app.get('/shop', function (req, res) {
    res.render('shop');
});

app.get('/news-details', function (req, res) {
    res.render('news-details');
});

app.get('/news', function (req, res) {
    res.render('news');
});

app.get('/our-product', function (req, res) {
    res.render('our-product');
});

app.get('/market', function (req, res) {
    res.render('market');
});

app.get('/contact', function (req, res) {
    res.render('contact',{qs: req.query});
});

app.use(function (req, res) {
    res.status(404);
    res.render('404');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('App is running on http://localhost:5000');
});