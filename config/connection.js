// dependencies
var mysql = require("mysql");

// configures the connection between node and mysql
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "burgers_db"
});

connection.connect(function(err) {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}

	console.log("connected as id: " + connection.threadId);
});

module.exports = connection;