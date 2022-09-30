const express = require("express");
const recipesRouter = express.Router();
const { Recipes } = require("../classes/recipesclass");

recipesRouter.get("/", async (req, res) => {
  const recipes = await Recipes.findAll();
  res.json({ recipes });
  // res.setHeader("Content-type", "text/html");
  // recipes.map((recipe) =>
  //   res.send("<div><p>{recipe.name}</p><p>{recipe.ingredients}</p></div>")
  // );
});
recipesRouter.get("/:id", async (req, res) => {
  const recipe = await Recipes.findByPk(req.params.id);
  res.json({ recipe });
});
recipesRouter.post("/", async (req, res) => {
  const name = req.body.name;
  const ingredients = req.body.ingredients;
  const newRecipe = await Recipes.create({
    name: name,
    ingredients: ingredients,
  });
  res.json({ newRecipe });
});
recipesRouter.put("/:id", async (req, res) => {
  const recipe = await Recipes.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ recipe });
});
recipesRouter.delete("/:id", async (req, res) => {
  await Recipes.destroy({ where: { id: req.params.id } });
  res.json({ message: "User deleted" });
});

module.exports = recipesRouter;
