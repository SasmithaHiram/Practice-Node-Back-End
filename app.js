const os = require("os");
const path = require("path");
const http = require("http");
const PORT = 3000;
const { getAllProduct } = require("./services/product-service.js");

const server = http.createServer((req, res) => {
  if (req.method == "POST" && req.url == "/create-product") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "product created",
      })
    );
  }

  if (req.method == "GET" && req.url == "/get-all") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(getAllProduct()));
  }
});

server.listen(PORT, () => {
  console.log("server is started");
});
