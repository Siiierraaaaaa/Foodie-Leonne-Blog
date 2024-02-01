const express = require('express');
const router = express.Router();
const Recipe = require('./recipe.model');

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Update recipe rating
exports.updateRecipeRating = async (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;

  try {
    await Recipe.findByIdAndUpdate(id, { $set: { rating } });
    res.status(200).send('Rating updated successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Add comment to recipe
exports.addCommentToRecipe = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).send('Recipe not found.');
    }

    recipe.comments.push({ text });
    await recipe.save();

    res.status(200).send('Comment added successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
