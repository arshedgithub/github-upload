const http = require("http");

const server = http.createServer((req, res) => {
  //   res.statusCode = 200;
  //   res.end("Hello World");

  switch (req.url) {
    case "/":
      res.end("home");
      break;
    case "/a":
      res.end("I am A");
      break;
    default:
      res.end("not found");
  }
});

server.listen(3000);
