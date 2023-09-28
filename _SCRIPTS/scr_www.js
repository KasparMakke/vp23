const http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {"Content-type": "text/html"});
    
    res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>KMakke Veebiproge</title></head><body>');
    res.write('<h1>KASPAR MAKKE</h1><p>NB: See veebileht on valminud TLU Digitech. informaatika eriala ÃµppetÃ¶Ã¶raames.</p><hr><p> TEST_01.07.09.2023_11:59 </p>');
    res.write('</body></html>');

    return res.end;
}).listen(5129);