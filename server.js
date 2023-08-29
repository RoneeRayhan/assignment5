const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Set the content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Handle different routes
  if (req.url === '/') {
    res.end('This is Home Page');
  } else if (req.url === '/about') {
    res.end('This is About Page');
  } else if (req.url === '/contact') {
    res.end('This is Contact Page');
  } else if (req.url === '/file-write') {
    // Write "hello world" to demo.txt
    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.end('File demo.txt created with content "hello world"');
      }
    });
  } else {
    // Handle unknown routes with a 404 response
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Log a message when the server starts listening
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
