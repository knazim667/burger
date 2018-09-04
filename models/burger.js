var orm = require("../config/orm");

var burger = {
    all: function (cb){
        orm.all("burger", function(res){
            cb(res);
        });
    };
}


module.exports = burger;