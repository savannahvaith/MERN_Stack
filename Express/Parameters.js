let express = require("express");
let app = express();

app.get("/message/:name", (req,res)=>{
    res.write("Hello:" + req.params.name);
    res.end();
});

app.get("/msg/:n/:a", (req,res)=>{
    res.write(req.params.n + " lives in " + req.params.a);
    res.end();
});

app.listen(8078);