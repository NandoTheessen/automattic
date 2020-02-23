const { createRecipe, deleteRecipe } = require("../data/abstraction");

module.exports = {
  postOne: async (req, res) => {
    const { title, url } = req.body;
    if ((!title, !url)) {
      res
        .status(400)
        .json({ msg: "Please provide a title and url for the recipe" });
      return;
    }
    let recipe;
    try {
      recipe = await createRecipe(title, url);
    } catch (e) {
      res.status(500).json(e);
      return;
    }
    if (!recipe) return;
    res.status(200).json({ recipe: recipe });
  },
  deleteOne: async (req, res) => {
    const { id } = req.body;
    if (!id) {
      res.status(400).json({ msg: "Please provide a valid id" });
      return;
    }
    try {
      const deleted = await deleteRecipe(id);
      res.status(200).json({ msg: "deleted" });
    } catch (e) {
      res.status(404).json({ msg: "Recipe not found" });
    }
  }
};
