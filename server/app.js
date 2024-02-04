const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const RecipeController = require('./recipe.controller');
const Recipe = require('./recipe.model');
require('dotenv').config();
app.use('/api', require('./admin.routes'));

const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());
app.use(express.json());

// Load environment variables from .env
const dotenv = require('dotenv');
dotenv.config();

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Verify MongoDB connection
const db = mongoose.connection;
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
db.once('open', () => {
  console.log('Connected to MongoDB!');
  
  // Call the function to insert sample recipes after connecting to MongoDB
  seedDatabase();
});

async function seedDatabase() {
  const sampleRecipes = [
    {
      name: 'Recipe 1',
      imageUrl: 'path/to/recipe1.jpg',
      description: 'Description of Recipe 1',
      rating: 4,
      comments: [
        { text: 'Great recipe!' },
        { text: 'I loved it!' },
      ],
    },
    // Add more sample recipes as needed
  ];

  await Recipe.insertMany(sampleRecipes, (error, recipes) => {
    if (error) {
      console.error('Error seeding database:', error);
    } else {
      console.log('Database seeded with sample recipes:', recipes);
    }
  });
  app.get('/api/recipes', async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.json(recipes);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.get('/api/recipes/:category', async (req, res) => {
    const { category } = req.params;
});
app.post('/api/recipes', async (req, res) => {
  const { name, imagePath, description, category } = req.body;

  try {
    const newRecipe = new Recipe({ name, imagePath, description, category });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const emailRoutes = require('./email.routes');
app.use('/', emailRoutes);




const recipeController = require('./recipe.controller');

app.get('/api/recipes', recipeController.getAllRecipes);
app.put('/api/recipes/:id/rating', recipeController.updateRecipeRating);
app.post('/api/recipes/:id/comments', recipeController.addCommentToRecipe);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
}
