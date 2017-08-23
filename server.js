// BASE SETUP
// =============================================================================

var express = require('express'),
	bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

var test = require('./routes/test');
var crypto = require('crypto');

app.set('db_model', require('./models'));

// set the view engine to ejs
app.set('view engine', 'ejs');


// IMPORT ROUTES
// =============================================================================
var router1 = express.Router();

// on routes that end in /users
// ----------------------------------------------------

// Middleware to use for all requests
router1.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// REGISTER OUR ROUTES
// =============================================================================
app.use('/', router1);

app.use('/test',test);

app.get('/', function(req, res) {
	console.log('index');
    res.render('pages/index');
});


app.get('/about', function(req, res) {
	console.log('about');
    res.render('pages/about');
});
// START THE SERVER
// =============================================================================

app.set('port', process.env.PORT || 3000);




/*
*In order to create a maintainable application, we will put all the database logic 
*into the models folder. When the application gets fired up, sequelize will sync 
*the models with the database and afterwards start the server
*/
//console.log(app.get('db_model'));

app.get('db_model').sequelize.sync().then(function () {
  var server = app.listen(app.get('port'), function() {
    console.log('ICM test App running on port:3000');
    
  });
});