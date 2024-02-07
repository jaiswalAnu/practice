const http=require("http");
const fs=require("fs");
const { url } = require("node:inspector");
const hostname='127.0.0.1';
const port =3000;
const home =fs.readFileSync('./inex.html')
const home =fs.readFileSync('./about.html')
const home =fs.readFileSync('./services.html')
const home =fs.readFileSync('./contact.html')
const server =http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;
    res.statusCode=200;
    res.setHeader('content-Type',text/html)
    if(url=='/home'){
        res.end(home);
    }
    else if(url=='/about'){
        res.end(about);
    }
    else if(url=='/sevices'){
        res.end(sevices); 
    }
    else if(url=='/contact'){
        res.end(contact);
    }
    else {
        res.statusCode=404
        res.end("<h> 404 is not found</h>")
    }
});
server.listen(port,hostname,()=>{
    console.log('Server running at http://${hostname}:${port}/');
});