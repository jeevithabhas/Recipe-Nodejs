const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [String],
  instructions: { type: String, required: true },
  prepTime: Number,
  servings: Number,
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
