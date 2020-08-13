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

// Task: Write a request that computes two numbers based on a given operator
app.get("/Maths/:op/:no1/:no2", (req,res)=>{
    res.write(`Operation: ${req.params.op} \n Number 1: ${req.params.no1}\n Number 2: ${req.params.no2}\n`);
    let no1 = parseInt(req.params.no1); 
    let no2 = parseInt(req.params.no2); 
    

    switch(req.params.op){
        case "add": 
            res.write(`Output: ${no1+no2}`);
            break;
        case "sub":
            res.write(`Output: ${no1 - no2}`);
            break;
        case "mult":
            res.write(`Output: ${no1 * no2}`);
            break;
        case "div":
            res.write(`Output: ${no1 / no2}`);
            break;
    }
    res.end();
})

app.listen(8078);