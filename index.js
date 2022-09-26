const express = require("express");

const app = express();

const port = process.env.PORT || 4001;

// const { expressjwt: jwt } = require("express-jwt");
// const jwks = require("jwks-rsa");

const seed = require("./seed");

const usersRouter = require("./api/usersAPI");
const secretRecipesRouter = require("./api/secretRecipesAPI");
const recipesRouter = require("./api/recipesAPI");

app.use("/users", usersRouter);
app.use("/secretRecipes", secretRecipesRouter);
app.use("/recipes", recipesRouter);

app.use(express.json());

app.get("/", (req, res) => {
  // res.send("Welcome to the Krusty Krab!!");
  res.setHeader("Content-type", "text/html");
  res.send("<h1>Welcome to the Krusty Krab</h1>");
});

app.listen(port, async () => {
  try {
    await seed();
    console.log(`Running app on port ${port} at http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});
