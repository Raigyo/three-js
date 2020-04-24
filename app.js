// server.js
// load the things we need
var express = require('express');
var app = express();

//access 'public' as static pages/components
app.use("/public", express.static('./public/'));

//Express default directory for templates is 'views'
//Can be changed with:
//app.set 'views', path.join(__dirname, 'newDir')
//or
//app.set('views', newDir);

// set the view engine to ejs
app.set('view engine', 'ejs');
//Other exemples:
//app.set('view engine', 'pug')
//app.set('view engine', 'jade');
//app.set('view engine', 'twig');
//app.set('view engine', 'html');

//ROUTES
// index page
app.get('/', function(req, res) {//route (= url in navbar.ejs)
    res.render('pages/index');// use res.render to load up an ejs view file, no need to set .ejs
});

//geometry
app.get('/donuts', function(req, res) {
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

app.get('/mat-fragment-movement', function(req, res) {
    res.render('pages/materials/fragment-movement');
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

app.get('/several-spots', function(req, res) {
    res.render('pages/lights/several-spots');
});

//camera
app.get('/cam-orthographic', function(req, res) {
    res.render('pages/camera/orthographic');
});

app.get('/cam-perspective', function(req, res) {
    res.render('pages/camera/perspective');
});

app.get('/cam-follow', function(req, res) {
    res.render('pages/camera/follow');
});

//user interaction
app.get('/user-kb-event', function(req, res) {
    res.render('pages/user-interaction/keyboard-event');
});

app.get('/user-ms-picking', function(req, res) {
    res.render('pages/user-interaction/mouse-picking');
});

app.get('/user-ms-picking-move', function(req, res) {
    res.render('pages/user-interaction/mouse-picking-move');
});

app.get('/user-ray', function(req, res) {
    res.render('pages/user-interaction/ray-object');
});

app.get('/user-balloon', function(req, res) {
    res.render('pages/user-interaction/user-balloon');
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

app.get('/real-pyramids', function(req, res) {
    res.render('pages/realism/pyramids');
});


//Run server
app.listen(3000);
console.log('3000 is the magic port');