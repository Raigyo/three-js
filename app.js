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

//geometry
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

//materials
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

app.get('/mat-light-sensitive', function(req, res) {
    res.render('pages/materials/light-sensitive');
});

//lights
app.get('/lights-ambiant', function(req, res) {
    res.render('pages/lights/ambiant');
});

app.get('/lights-directional', function(req, res) {
    res.render('pages/lights/directional');
});

app.get('/lights-hemisphere', function(req, res) {
    res.render('pages/lights/hemisphere');
});

app.get('/lights-point', function(req, res) {
    res.render('pages/lights/point');
});

app.get('/lights-spot', function(req, res) {
    res.render('pages/lights/spot');
});

//camera
app.get('/cam-orthographic', function(req, res) {
    res.render('pages/camera/orthographic');
});

app.get('/cam-perspective', function(req, res) {
    res.render('pages/camera/perspective');
});

//user interaction
app.get('/user-kb-event', function(req, res) {
    res.render('pages/user-interaction/keyboard-event');
});

app.get('/user-ms-event', function(req, res) {
    res.render('pages/user-interaction/mouse-event');
});

app.get('/user-ms-picking', function(req, res) {
    res.render('pages/user-interaction/mouse-picking');
});

app.get('/user-ray', function(req, res) {
    res.render('pages/user-interaction/ray-object');
});

//add realism
app.get('/real-textures', function(req, res) {
    res.render('pages/realism/textures');
});

app.get('/real-panorama', function(req, res) {
    res.render('pages/realism/panorama');
});

app.get('/real-shadows', function(req, res) {
    res.render('pages/realism/shadows');
});

app.get('/real-shadows', function(req, res) {
    res.render('pages/realism/shadows');
});

//final challenge
app.get('/final-challenge', function(req, res) {
    res.render('pages/final/final-challenge');
});



app.listen(8080);
console.log('8080 is the magic port');