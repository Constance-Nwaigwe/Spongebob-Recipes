const path = require("path");
const fs = require("fs").promises;

const { db } = require("./classes/db");
const { Users } = require("./classes/userclass");
const { Recipes } = require("./classes/recipesclass");
const { SecretRecipes } = require("./classes/secretRecipes");

const seed = async () => {
  // db
  await db.sync({ force: true });

  // connect data path
  const userspath = path.join(__dirname, "data/users.json");
  const recipespath = path.join(__dirname, "data/recipes.json");
  const secretRecipespath = path.join(__dirname, "data/secretRecipes.json");

  // buffer for path
  const usersbuffer = await fs.readFile(userspath);
  const recipesbuffer = await fs.readFile(recipespath);
  const secretRecipesbuffer = await fs.readFile(secretRecipespath);

  // parse data
  const { usersdata } = JSON.parse(String(usersbuffer));
  const { recipesdata } = JSON.parse(String(recipesbuffer));
  const { secretRecipesdata } = JSON.parse(String(secretRecipesbuffer));

  // map data to create table
  const userspromise = usersdata.map((user) => Users.create(user));
  const recipespromise = recipesdata.map((recipe) => Recipes.create(recipe));
  const secretRecipespromise = secretRecipesdata.map((recipe) =>
    SecretRecipes.create(recipe)
  );

  // await promise
  await Promise.all(userspromise);
  await Promise.all(recipespromise);
  await Promise.all(secretRecipespromise);

  console.log("success");
};

module.exports = seed;
