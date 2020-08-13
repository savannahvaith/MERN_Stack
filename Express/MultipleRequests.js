let express = require("express");
let app = express();

app.get(["/one","/two","/three"],((req,res)=>{
    reply(res); 
}));

let reply = (res) => {
    res.write("Henlo friends");
    res.end();
}

app.listen(8078);