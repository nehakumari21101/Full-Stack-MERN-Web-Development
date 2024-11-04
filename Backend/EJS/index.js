const express = require("express");
const app = express();

let port = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, () => {
  console.log("app is listening");
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/ig/:username", (req,res)=>{
  let {username} = req.params;
  const instadata = require("./data.json");
  let data = instadata[username];
  console.dir(instadata);
  if(data){
    res.render("instagram.ejs",{username, data})
  }else{
    res.render("error.ejs")
  }
  
})

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {num:diceVal});
  });

 
