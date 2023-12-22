// Create web server

// 1. Load HTTP module
const http = require('http');
const fs = require('fs');

// 2. Create HTTP server and listen on port 8000 for requests
http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Send the response body "Hello World"
    fs.readFile('index.html', (err, data) => {
        if (err) throw err;
        res.end(data);
    });
}).listen(8000);

