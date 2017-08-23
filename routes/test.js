var express = require('express'),

router = express.Router();

router.get('/', function(req, res) {
	console.log('route test');
   // res.render('pages/index');

    var data1 = [
        { name: 'Bloody Mary', age: 3 },
        { name: 'Martini', age: 5 },
        { name: 'Scotch', age: 10 }
    ];
    var tagline = "This is tagline";

    res.render('pages/index', {
        data: data1,
        tagline: tagline
    });
});

router.get('/vineet', function(req, res) {
	console.log('route test vineet');
    res.render('pages/test');
});

module.exports = router;