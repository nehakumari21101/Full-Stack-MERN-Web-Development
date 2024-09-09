const express = require("express");
const app = express();

let port = 8080;

app.set("view engine", "ejs");

app.listen(port, () => {
  console.log("app is listening");
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {num:diceVal});
  });
