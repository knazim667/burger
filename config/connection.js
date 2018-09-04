// set up my sql connection

var mysql = require('mysql');

var connection = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "",
    database : "burgers_db"
});
// make connection
connection.connect(function(err){
    if (err) {
        console.log("error connected " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// Export connection for our orm to use