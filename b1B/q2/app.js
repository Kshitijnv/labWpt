const express = require("express");
const bodyparser = require("body-parser");
const routes = require("./router/routes");
const app = express();

// define middleware
app.use(bodyparser.json());
app.use("/", routes);
//run the server on given port
app.listen(9090, () => {
  console.log("Server is running at 9090 port");
});
module.exports = app;
