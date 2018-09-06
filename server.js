var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout : "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");
app.use(routes);

app.use(express.static('public'));

app.listen(PORT, function(err){
    if (err) throw err;
    console.log("App Listning on Port " + PORT);
});


