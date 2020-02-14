const Recipe = require("./models");

module.exports = {
  getRecipe: async id => {
    try {
      const recipe = await Recipe.findById(id);
    } catch (e) {
      return null;
    }
    return recipe;
  },
  getAllRecipes: async () => {
    const recipes = await Recipe.find();
    if (!recipes) return null;
    return recipes;
  },
  createRecipe: async (title, url) => {
    const recipe = new Recipe({ title: title, url: url });
    await recipe.save();
    return recipe;
  }
};
