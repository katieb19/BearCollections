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

app.get("/log/books", (req, res) => {
  res.render('log/books.ejs');
});

// app.get("/log/movie", (req, res) => {
//   res.send("Log Movie");
// });

app.get("/log/shows", (req, res) => {
  res.render("log/shows.ejs");
});

app.get("/thanks", (req, res) => {
  res.render("home/thanks");
});

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
