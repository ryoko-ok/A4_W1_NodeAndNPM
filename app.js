// copy from "Nodejs"_"about"
const http = require('http'); // like a PHP require

// require is more or less the same as a JS import
// const hostname = '127.0.0.1'; // this is localhost
const port = process.env.PORT || 3000; // localhost:3000

const server = http.createServer((req, res) => { // req:request res:response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Hello World is here');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});