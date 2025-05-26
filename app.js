const os = require("os");
const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("Hello");
});

server.listen(PORT, () => {
  console.log("server is started");
});
