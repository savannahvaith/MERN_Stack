let express = require("express");
let app = express(); 

let londonRequest = ((req,res)=>{
    res.write("Welcome to London"); 
    res.end();
});

app.get("/QA",((req,res)=>{
    console.log("QA Request Receives");
}));

app.get("/London", londonRequest); 

app.listen(8078);