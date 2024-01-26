const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const RecipeController = require('./controllers/recipe.controller');
const Recipe = require('./models/recipe.model');
require('dotenv').config();

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

function seedDatabase() {
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

  Recipe.insertMany(sampleRecipes, (error, recipes) => {
    if (error) {
      console.error('Error seeding database:', error);
    } else {
      console.log('Database seeded with sample recipes:', recipes);
    }
  });
}

// Import routes
const emailRoutes = require('./email.routes');
app.use('/', emailRoutes);

const admin = require('./admin.routes')
app.use('/', admin);


const recipeController = require('./recipe.controller');
app.get('/api/recipes', RecipeController.getAllRecipes);
app.put('/api/recipes/:id/rating', RecipeController.updateRecipeRating);
app.post('/api/recipes/:id/comments', RecipeController.addCommentToRecipe);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
