const { getRecipe, getAllRecipes } = require("../data/abstraction");

module.exports = {
  getOne: async (req, res) => {
    if (!req.params.id) {
      res.status(400).json({ msg: "Please provide a valid ID" });
      return;
    }
    let recipe = await getRecipe(req.params.id);
    console.log("recipe: ", recipe);
    if (!recipe) {
      res.status(404).json({ msg: "recipe not found" });
      return;
    }
    res.status(200).json({ recipe: recipe });
  },
  getAll: async (req, res) => {
    const recipes = await getAllRecipes();
    if (!getAllRecipes) {
      res.status(404).json({ msg: "no recipes found!" });
      return;
    }
    res.status(200).json(recipes);
  }
};
