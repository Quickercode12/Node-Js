// simple http server create
// Node.js has many built-in modules that are
//  part of the platform and come with Node.js installation. These modules can be loaded into the program by using the required function

const http = require("http");
const { hostname } = require("os");

const Port = 3000;

// it is ip addresss of the hostname just for example
const hostName = "8.8.8.8";

// create the http server Hello Developer
const server = http.createServer((req, res) => {
  res.end("Hello Developer");
});

server.listen(Port, () => {
  console.log(`Your server is running at http://${hostName}:${Port}`);
});
