const express = require("express");
const recipesRouter = express.Router();
const Recipes = require("../classes/userclass");

recipesRouter.get("/recipes", async (req, res) => {
  const recipes = await Recipes.findAll();
  res.json({ recipes });
});
recipesRouter.get("/recipes/:id", async (req, res) => {
  const recipe = await Recipes.findByPk(req.params.id);
  res.json({ recipe });
});
recipesRouter.post("/recipes", async (req, res) => {
  const name = req.body.name;
  const ingredients = req.body.ingredients;
  const newRecipe = await Recipes.create({
    name: name,
    ingredients: ingredients,
  });
  res.json({ newRecipe });
});
recipesRouter.put("/recipes/:id", async (req, res) => {
  const recipe = await Recipes.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ recipe });
});
recipesRouter.delete("/recipes/:id", async (req, res) => {
  await Recipes.destroy({ where: { id: req.params.id } });
  res.json({ message: "User deleted" });
});

module.exports = { recipesRouter };
