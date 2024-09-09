const express = require("express");
const app = express();

const port = 8080;

//Sending Response: This method listens every request and execute callback for response.
// app.use((req, res) => {
//   console.log("request received");
//   res.send({ fruit: "apple", color: "red" });
// });

//Handling Requests: Listen makes web server that listen incoming API requests.
app.listen(port, () => {
  console.log("app is listning");
});

//Routing
app.get("/", (req,res)=>{
    res.send("This is home path.");
})

app.get("/about", (req,res)=>{
    res.send("This is about us path.");
})
app.get("/contact", (req,res)=>{
    res.send("This is contact us path.");
})

// app.get("*", (req,res)=>{
//     res.send("this path does not exit.")
// })

//Path Parameters: 'req.params' has parameters passed by client.
app.get("/:username/:id", (req,res)=>{
    console.log(req.params);
    let {username, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}.</h1>`
    res.send(htmlStr);
})

//Query Strings
app.get("/search", (req,res)=>{
    console.log(req.query);
    let { q } = req.query;

    if(!q){
        res.send("No query found.");
    }
    res.send(`These are the results for: ${q}`);
})