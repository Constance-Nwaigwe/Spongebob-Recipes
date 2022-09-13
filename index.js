const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

// const { expressjwt: jwt } = require("express-jwt");
// const jwks = require("jwks-rsa");

const seed = require("./seed");

const usersRouter = require("./api/usersAPI");
const secretRecipesRouter = require("./api/secretRecipesAPI");
const recipesRouter = require("./api/recipesAPI");

app.use("/users", usersRouter);
app.use("/secretRecipes", secretRecipesRouter);
app.use("/recipes", recipesRouter);

// app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Krusty Krab!!");
});

app.listen(port, async () => {
  await seed();
  console.log(`Running app on port ${port} at http://localhost:${port}`);
});
