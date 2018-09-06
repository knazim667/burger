var orm = require("../config/orm");

var burger = {
    all: function (cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },

    create : function(calsArray, valArray, cb){
        orm.create("burgers", calsArray, valArray, function(result){
            cb(result);
        });

    },

    update : function(objColVal, condition, cb){
        orm.update("burgers", objColVal, condition, function(result){
            cb(result);
        });
    }
};


module.exports = burger;