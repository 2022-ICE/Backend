const express = require("express");
const app = express();

app.get('/', (req,res)=>{
    res.send("main페이지");
});

app.get('/login', (req,res)=>{
    res.send("login페이지");
});

app.listen(3000, function(){
    console.log("start server");
});