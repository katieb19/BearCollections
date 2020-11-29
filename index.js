const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const path = require('path');
const PORT = 3000;
const mysql = require('mysql');

//set up our templating engine
app.use(express.static(__dirname + "/views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set up body parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// must specify options hash even if no options provided!
var phpExpress = require('php-express')({

  // assumes php is in your PATH
  binPath: 'php'
});

// set view engine to php-express
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');

// routing all .php file to php-express
app.all(/.+\.php$/, phpExpress.router);


// retrieve static files for endpoints
app.get("/", (req, res) => {
  res.render('home/home.ejs');
});

app.get("/rank", (req, res) => {
  res.render('log/rank.ejs');
});

app.get("/log", (req, res) => {
  res.send("Log");
});

app.get("/log/books", (req, res) => {
  res.render('log/logbooks.ejs');
});

app.get("/log/movies", (req, res) => {
  res.render('log/logmovies.ejs');
});

// show that port is listening when we run nodemon
app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
