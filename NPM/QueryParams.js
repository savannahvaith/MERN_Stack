var http=require("http")
var URL=require("url")
let requestprocessing=function(request,response){
	let myurl=URL.parse(request.url,true)
	response.writeHead(200, {'Content-Type': 'text/html'});
	if(myurl.pathname=="/"){
		for(let a=1;a<=10;a++){
			response.write("<A href='http://localhost:4000/timestable?t="+a+"'>"+a+"</A>");
			response.write("<br>");
		}
		response.end();
	}
	if(myurl.pathname=="/timestable"){
		let t = myurl.query.t;
		response.write("<A href='http://localhost:4000'> Home </A>");
		response.write("<h2> Your Times Table is "+ t + " </h2>"); 
		response.write("<table>");
		for(let i=1; i<=12; i++){
			response.write("<tr><td>");
			response.write(t + "X" + i + "="+(t*i));
			response.write("</td></tr>");
		}
		response.write("</table>");
		response.end();
	}
}
let server=http.createServer(requestprocessing);
server.listen(4000);
