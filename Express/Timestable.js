let express = require("express");
let app = express(); 

app.get("/", (req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<p>Please select a number: \n</p>`); 
    for(let i =1; i<12; i++){
        res.write(`<a href="/range/${i}">${i}</a><br/>`);
    }
    res.end();
});
app.get("/range/:t", (req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let selected = req.params.t; 
    res.write(`<p>You've selected the times table of ${selected}</p>`);
    for (let r = 10; r < 101; r=r+10) {
        res.write(`<a href="/timestable/${selected}/${r}">${r}</a><br/>`);
    }
    res.end();

});
app.get("/timestable/:t/:range", (req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    let times = parseInt(req.params.t); 
    let range = parseInt(req.params.range); 
    res.write("<table border=2>");
    for(let i=0; i<=range; i++){
        res.write(`<tr><td>`);
        res.write(`${times} X ${i} = ${times*i}`);
    }
    res.write("</table>");
    res.end();
});



app.listen(8078);