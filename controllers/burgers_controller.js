var express = require('express');
var router = express.Router();
var db = require('../models');

//route used to populate the initial page with the burgers from the DB
router.get('/', function(req, res) {
	db.Burger.findAll({
		include: [{
			model: db.Eater
		}]
	}).then(function(result) {
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
	db.Eater.findOne({
		where: {
			eater_name: req.body.eater
		}	
	}).then(function(eater) {
		if (eater) {
			updateBurger(eater, id, req, res);
		} else {
			db.Eater.create({
				eater_name: req.body.eater
			}).then(function(eater) {
				updateBurger(eater, id, req, res);
			});
		}
	});
});

router.get('/api/:eatername', function(req, res) {
	console.log(req.body);
	db.Eater.findOne({
		where: {
			eater_name: req.params.eatername
		},
		include: [{
			model: db.Burger
		}]
	}).then(function(result) {
		res.json(result);
	});
});

function updateBurger(eater, id, req, res) {
	db.Burger.update(
		{
			devoured: req.body.devoured,
			EaterId: eater.id
		}, {
			where: {
			id: id
		}
	}).then(function(result) {
		res.redirect('/');
	});
}

//export router to be used elsewhere
module.exports = router;