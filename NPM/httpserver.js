//run npm install http before importing.
import { createServer } from "http";

// let reqprocess = function(req,res){ console.log("reqest received");}
let reqprocess = function (req, res) { console.log(req.url); } // to find the url of the request

let server = createServer(reqprocess);

server.listen(8001);