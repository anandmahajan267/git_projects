// server.js
// load the things we need
var express = require('express');
var app = express();
var expressLayout = require("express-ejs-layouts");
var bodyParser = require("body-parser");


//set body parser
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', __dirname+'/views'); 

// set the view engine to ejs
app.set('view engine', 'ejs');

//set routes
app.use(require("./app/routes"));

// start our server
app.listen(8080);
console.log('App listening on http://localhost:8080');