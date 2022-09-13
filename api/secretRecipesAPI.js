const express = require("express");
const secretRecipesRouter = express.Router();
const SecretRecipes = require("../classes/userclass");

secretRecipesRouter.get("/secretRecipes", async (req, res) => {
  const secretRecipes = await SecretRecipes.findAll();
  res.json({ secretRecipes });
});
secretRecipesRouter.get("/secretRecipes/:id", async (req, res) => {
  const secretRecipe = await SecretRecipes.findByPk(req.params.id);
  res.json({ secretRecipe });
});
secretRecipesRouter.post("/secretRecipes", async (req, res) => {
  const name = req.body.name;
  const ingredients = req.body.ingredients;
  const newSecretRecipe = await SecretRecipes.create({
    name: name,
    ingredients: ingredients,
  });
  res.json({ newSecretRecipe });
});
secretRecipesRouter.put("/secretRecipes/:id", async (req, res) => {
  const secretRecipe = await SecretRecipes.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ secretRecipe });
});
secretRecipesRouter.delete("/secretRecipes/:id", async (req, res) => {
  await SecretRecipes.destroy({ where: { id: req.params.id } });
  res.json({ message: "User deleted" });
});

module.exports = { secretRecipesRouter };
