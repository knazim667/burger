// import MySql connection

var connection = require("../config/connection");

//HELPER Function 

function printQuestionMarks(num){
    var arr = [];
    for (var i=0; i<num; i++){
        arr.push("?");
    }
}
// helper function to convert object key / value pairs to sql syntax
function objToSql(ob){
    var arr = [];

    // loop through the keys and push the key /value as a string int arr

    for (var key in ob){
        var value = ob[key];
        // check to skip hidden properties
        if (object.hasOwnProperty.call(ob, key)){
            // if string with spaces, add quotation

            if (typeof value === "string" && value.indexOf(" ")>= 0){
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

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
        
    },
    // INSERT INTO 
    create : function(table, colsArray, valArray,cb){
        var sql = "INSERT INTO " + table + " (";
        sql += colsArray.toString() + ") VALUES (";
        printQuestionMarks(valArray.length) +")";

        console.log(sql);

        connection.query(sql, valArray, function (err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },

    update : function(table, objColVal, condition, cb){
        var sql = "UPDATE" + table + "SET" + objToSql(objColVal)+ "WHERE" + condition;

        consoel.log(sql);

        connection.query(sql, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
        
    }

  
};

module.exports = orm;