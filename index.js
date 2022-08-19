const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

app.get("/", (req, res) => {
  res.send("Welcome to the Krusty Krab!!");
});

app.listen(port, () => {
  console.log(`Running app on port ${port} at http://localhost:${port}`);
});
