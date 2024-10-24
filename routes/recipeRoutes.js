const express = require('express');
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} = require('../controllers/recipeController');
const router = express.Router();

// Define routes
router.post('/recipes', createRecipe); // Create a recipe
router.get('/recipes', getAllRecipes); // Get all recipes
router.get('/recipes/:id', getRecipeById); // Get a recipe by ID
router.put('/recipes/:id', updateRecipe); // Update a recipe by ID
router.delete('/recipes/:id', deleteRecipe); // Delete a recipe by ID

module.exports = router;
