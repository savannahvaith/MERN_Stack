let express = require("express");
let app = express();

app.get(["/one","/two","/three"], function(req,res){
    console.log("hello friends");
});

app.listen(8078);