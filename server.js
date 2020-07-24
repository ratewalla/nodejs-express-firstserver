const express = require("express");
const app = express();

app.get("/",(req, res)=>{
    res.send("<h1>Hello World</h1>");
});

app.get("/contact",(req, res)=>{
    res.send("<h1>Contact page</h1>");
});

app.get("/about",(req, res)=>{
    res.send("<h1>About Me</h1><p>My name is Rizwan.</p><p>I am a web developer.</p><p>I am learning NodeJs.</p>");
});

app.get('/test', (req, res) => {
    res.send("short function test");
});

app.listen(3000, ()=>{
    console.log("Server started on port 3000.");
});
