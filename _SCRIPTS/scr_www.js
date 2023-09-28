const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

const page_head = ('<!DOCTYPE html><html><head><meta charset="utf-8"><title>KMakke Veebiproge</title></head><body>');
const page_banner = ('<img src="banner.png" alt="kursuse banner">');
const page_body = ('<h1>KASPAR MAKKE</h1><p>NB: See veebileht on valminud TLU Digitech. informaatika eriala raames.</p><hr>');
const page_footer = ('</body></html>');

http.createServer(function(req, res){
    let current_url = url.parse(req.url, true);

    if (current_url.pathname === "/"){
        res.writeHead(200, {"Content-type": "text/html"});
    
        res.write(page_head);
        res.write(page_banner)
        res.write(page_body);
        res.write('\n\t<hr>\n\t<p><a href="addname">Lisa oma nimi!</a>!</p>');
        res.write(page_footer);

        res.end();
    }
    else if (current_url.pathname === "/addname"){
        res.writeHead(200, {"Content-type": "text/html"});
    
        res.write(page_head);
        res.write(page_banner)
        res.write(page_body);
        res.write('\n\t<hr>\n\t<h2>Lisa oma nimi...</h2>');
        res.write('<p>placeholder</p>')
        res.write(page_footer);

        res.end();
    }

    else if (current_url.pathname === "/banner.png"){
        let file_path = path.join(__dirname, "../public", "banner/banner.png");
        fs.readFile(file_path, (err, data) =>{
            if (err){
                throw err;
            }
            else{
                res.writeHead(200, {"Content-type": "image/png"});
                res.end(data);
            }
        });
    }
    else{
        res.end("ERROR 404");
    }
    
}).listen(5129);