//Setup MySQL connection
var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'
	});
}

//make connection
connection.connect(function(err) {
	if (err) {
		console.log('error connecting: ' + err.stack);
	}
	console.log('connected as id ' + connection.threadId);
});

//export connection for ORM use
module.exports = connection;