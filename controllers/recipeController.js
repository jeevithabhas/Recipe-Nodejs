const Recipe = require('../models/recipeModel');

// Create Recipe
exports.createRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.status(201).json({ success: true, data: newRecipe });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get All Recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ success: true, data: recipes });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get Recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ success: false, message: 'Recipe not found' });
    }
    res.status(200).json({ success: true, data: recipe });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update Recipe by ID
exports.updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecipe) {
      return res.status(404).json({ success: false, message: 'Recipe not found' });
    }
    res.status(200).json({ success: true, data: updatedRecipe });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete Recipe by ID
exports.deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ success: false, message: 'Recipe not found' });
    }
    res.status(200).json({ success: true, message: 'Recipe deleted' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
