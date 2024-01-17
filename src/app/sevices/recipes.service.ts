// recipe.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesData = [
    {
      name: 'Smothered Okra',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  },
  {
      name: 'Stewed Hen',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  }, {
      name: 'Eggplant Casserole',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  }, {
      name: 'Mustard Greens',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  }, {
      name: 'Oyster Dressing',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  }, {
      name: 'BBQ Shrimp',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  }, {
      name: 'BBQ Ovenbake Ribs',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  }, {
      name: 'Red Beans and Rice',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  }, {
      name: 'Squash Casserole',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  }, {
      name: 'Jamblaya',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  }, {
      name: 'Stuffed Bellpepers',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  }, {
      name: 'Shrimp Creole',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  }, {
      name: 'Gumbo',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  }, {
      name: 'Stuffed Crab',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  }, {
      name: 'White Beans with Shrimp and Ham',
      imagePath: 'path/to/coming soon.jpg',
      description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
  },
];

   // Your recipe data goes here

  constructor() { }

  getRecipes(): any[] {
    return this.recipesData;
  }

  getRecipe(index: number): any {
    return this.recipesData[index];
  }
}

