// server.js
// load the things we need
var express = require('express');
var app = express();

app.use("/public", express.static('./public/'));


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/donuts', function(req, res) {//route (= url in navbar.ejs)
    res.render('pages/donuts-rain');//view
});

app.get('/saturn', function(req, res) {
    res.render('pages/saturn');
});

app.get('/cust-geo', function(req, res) {
    res.render('pages/custom-geometry');
});

app.get('/butterfly', function(req, res) {
    res.render('pages/butterfly');
});

app.get('/text-geo', function(req, res) {
    res.render('pages/text-geometry');
});



app.listen(8080);
console.log('8080 is the magic port');