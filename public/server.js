var http = require('http');

server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!\n');
}).listen(3131);

console.log('Server running on port 3131');
