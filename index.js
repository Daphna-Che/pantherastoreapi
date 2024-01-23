const express = require("express");
const server = express();

server.get("/", function (req, res) {
  return res.status(200).json({
    message: "Panthera store api service",
  });
});

server.listen(4000, function () {
  console.log("Service listening on port 4000");
});
