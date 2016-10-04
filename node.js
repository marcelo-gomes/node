var http = require('http');
const host = process.env.IP;
const port = process.env.PORT;
http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.end('Hello World\n');
}).listen(port,host);


 
    console.log(`Server running at http://${host}:${port}/`);