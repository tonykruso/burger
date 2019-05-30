//import the ORM to implement function
var orm = require("../config/orm.js");


//create burger object
var burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        });
    },

    create: function(cols, vals, cb){
        orm.create('burgers', cols, vals, function(res){
            cb(res);
        });
    },

    update: function(objColVals, condition, cb){
        orm.update('burgers', objColVals, condition, function(res){
            cb(res);
        });
    },

    delete: function(condition, cb){
        orm.delete('burgers', condtion, function(res){
            cb(res);
        })
    }
};

//export the database functions for the controller
module.exports=burger;