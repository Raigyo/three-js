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
    res.render('pages/geometry/donuts-rain');//view
});

app.get('/saturn', function(req, res) {
    res.render('pages/geometry/saturn');
});

app.get('/cust-geo', function(req, res) {
    res.render('pages/geometry/custom-geometry');
});

app.get('/butterfly', function(req, res) {
    res.render('pages/geometry/butterfly');
});

app.get('/text-geo', function(req, res) {
    res.render('pages/geometry/text-geometry');
});

app.get('/mat-basic', function(req, res) {
    res.render('pages/materials/basic');
});

app.get('/mat-normal', function(req, res) {
    res.render('pages/materials/normal');
});

app.get('/mat-depth', function(req, res) {
    res.render('pages/materials/depth');
});
app.get('/mat-line-points', function(req, res) {
    res.render('pages/materials/line-points');
});

app.get('/mat-particles', function(req, res) {
    res.render('pages/materials/particles');
});



app.listen(8080);
console.log('8080 is the magic port');