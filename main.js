// Import the 'http' module to create a web server
var http = require('http');

// Create an HTTP server that responds to requests
var server = http.createServer(function (request, response) {
  // Write HTTP response headers with a status code and content type
  response.writeHead(200, {"Content-Type": "text/plain"});
  // End the response with a message
  response.end("Hello World!\n");
});

// Start the server listening on port 8000
server.listen(8000);
// Log a message to the console
console.log("Server listening at http://127.0.0.1:8000/");
