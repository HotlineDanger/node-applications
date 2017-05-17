const http = require("http");
const port = 3000;
const requestHandler = (request, response) => {
  console.log(request.url);
  response.end("Node JS saiyan on the way");
};
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    return console.log("Something wrong happened", err);
  }

  console.log(`server is listening on port ${port}`);
});