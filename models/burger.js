//import the ORM to implement function
var orm = require("../config/orm.js");


//create burger object
var burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne('burgers', cols, vals, function(res){
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb){
        orm.updateOne('burgers', objColVals, condition, function(res){
            cb(res);
        });
    }
};

//export the database functions for the controller
module.exports=burger;