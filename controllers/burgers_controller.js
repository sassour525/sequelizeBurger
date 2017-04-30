var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//route used to populate the initial page with the burgers from the DB
router.get('/', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObj = {
			burgers: data
		};
		res.render('index', hbsObj);
	});
});

//route used to add a new burger to the db
router.post('/', function(req, res) {
	burger.insertOne(req.body.name, function() {
		res.redirect('/');
	});
});

//route used to update the devoured column
router.put('/:id', function(req, res){
	var id = req.params.id;
	burger.updateOne(req.body.devoured, id, function() {
		res.redirect('/');
	});
});

//export router to be used elsewhere
module.exports = router;