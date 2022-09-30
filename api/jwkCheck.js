const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-0nf0mzq3.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "http://localhost:4001",
  issuer: "https://dev-0nf0mzq3.us.auth0.com/",
  algorithms: ["RS256"],
});

module.exports = jwtCheck;
