var http=require("http")
var URL=require("url")
let requestprocessing=function(request,response){
	let myurl=URL.parse(request.url,true)
	response.writeHead(200, {'Content-Type': 'text/html'});
	
	console.log("test")
	if(myurl.pathname=="/"){
		for(let a=1;a<=10;a++){
			response.write("<A href='http://localhost:4000/timestable'>"+a+"</A>");
			response.write("<br>");
		}
		response.end();
	}
	if(myurl.pathname=="/timestable"){
		response.write("<A href='http://localhost:4000'> Home </A>")
		response.write("<h2> Your Times Tabel is "+ myurl.query.t + " </h2>")
		response.end();
	}
}
let server=http.createServer(requestprocessing);
server.listen(4000);
