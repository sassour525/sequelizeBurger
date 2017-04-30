var orm = require('../config/orm.js');

var burger = {
	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},
	insertOne: function(valToInsert, cb) {
		orm.insertOne('burgers', 'burger_name', valToInsert, function(res) {
			cb(res);
		});
	},
	updateOne: function(updateVal, rowId, cb) {
		orm.updateOne('burgers', 'devoured', updateVal, rowId, function(res) {
			cb(res);
		});
	}
};

//export burger to be used elsewhere
module.exports = burger;