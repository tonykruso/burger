//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
var app = express();
// var router = express.Router();
// var burger = require("../models/burger.js");


//serve static content for the app from the public directory
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

//set handlebars as view engine
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs ({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//import routes 
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


app.listen(PORT, function(){
    console.log("server listening on localhost: " + PORT);
});