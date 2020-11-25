const express = require("express");
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(__dirname + "/views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render('home/home.ejs');
});

app.get("/log", (req, res) => {
  res.send("Log");
});

app.get("/log/books", (req, res) => {
  res.render('logs/logbooks');
});

//app.get("/log/movie", (req, res) => {
 // res.send("Log Movie");
//});

app.get("/log/show", (req, res) => {
  res.render('logs/logshow.ejs');
});

app.get("/thanks", (req, res) => {
  res.render("home/thanks");
});

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
