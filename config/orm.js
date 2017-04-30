var connection = require('./connection.js');

var orm = {
	selectAll: function(tblName, cb) {
		var queryString = 'SELECT * FROM ' + tblName + ';';
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(tblName, tblColumn, valToInsert, cb) {
		var queryString = 'INSERT INTO ?? (??) VALUES (?);';
		connection.query(queryString, [tblName, tblColumn, valToInsert], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function(tblName, tblColumn, updateVal, rowId, cb) {
		var queryString = 'UPDATE ?? SET ?? = ? WHERE id = ?;';
		connection.query(queryString, [tblName, tblColumn, updateVal, rowId], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;