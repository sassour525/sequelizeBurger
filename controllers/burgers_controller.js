var express = require('express');
var router = express.Router();
var db = require('../models');

//route used to populate the initial page with the burgers from the DB
router.get('/', function(req, res) {
	db.Burger.findAll({}).then(function(result) {
		res.render('index', {burgers: result});
	});
});

//route used to add a new burger to the db
router.post('/', function(req, res) {
	db.Burger.create({
		burger_name: req.body.name
	}).then(function(result) {
		res.redirect('/');
	});
});

//route used to update the devoured column
router.put('/:id', function(req, res){
	var id = req.params.id;
	db.Burger.update(
		{
			devoured: req.body.devoured
		}, {
			where: {
			id: req.params.id
		}
	}).then(function(result) {
		res.redirect('/');
	});
});

//export router to be used elsewhere
module.exports = router;