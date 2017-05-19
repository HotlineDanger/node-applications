const express = require("express");
const app = express();

app.get("/", function(request, response) {
  throw new Error("BOOM!!!");
});

app.use(function(error, request, response, next) {
  // You log the error, for now just console.log
  console.log(error);
  response.status(500).send("Something broke");
});

app.listen(3000);
