const http = require('http');

 const server =http.createServer((req, res) =>{
 if(req.url == '/'){
    res.write('<h1> HI Hayat Jahangir Khan</h1>  ');
} else if (req.url == '/about ') {
    res.write('<h1> From Tricolbal Pattan Dist Baramullah Jammu and Kashmir</h1>  ');
}
    res.end();
});

server.listen(5000);
console.log('the http server is running on port 5000');