//run npm install http before importing.
var http= require("http");
var url = require("url");

// let reqprocess = function(req,res){ console.log("reqest received");}
let reqprocess = function(req, res) { 
    let myurl = URL.parse(req.url,true)
    res.writeHead(200,{'Content-Type':'text/html'})   
    if(myurl.pathname=='/'){
        for(let a=1; a<=10; a++){
            Response.write("<a href='http://localhost:8001/timestable'>"+a+"</a>");
        }
        res.end()
    }
}

let server = createServer(reqprocess);

server.listen(8001);