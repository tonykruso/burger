//set up mysql connection
var mysql = require("mysql");

var connection = mysql.connection({
    host: "localhost",
    port: 3030,
    user: "root",
    password: "pickles68",
    database: burgers
});

//make connection
connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//export connection for our ORM to use
module.exports = connection;