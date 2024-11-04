const express = require("express");
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "start first, learn later."
    },
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "start first, learn later."
    },
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "start first, learn later."
    },
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "start first, learn later."
    }
]

app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts})
});

// Add route
app.get("/posts/new",(req,res)=>{
   res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let id= uuidv4();
    let {username, content} = req.body;
    posts.push({id, username,content});
    res.redirect("/posts");
})

//Show Route
app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let post = posts.find(p=>id===p.id);
    console.log(id);
    res.render("show.ejs", {post});
})

// update route
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let content = req.body.content;
    console.log(content);
    res.send("Patch request working. ")
})



app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})