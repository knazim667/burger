// import MySql connection

var connection = require("../config/connection");

// select all method

var orm = {
    all : function(table ,cb){
        var sql = "SELECT * FROM " + table;
        connection.query(sql, function(error, data){
            if (error) throw error;
            if (!data){
                console.log("no data");
            }else {
                cb(data);
            }
        });
        
    }

  
}

module.exports = orm;