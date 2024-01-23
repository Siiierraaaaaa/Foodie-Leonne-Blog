import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
    recipesData = [ // Dinner ideas
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
    },
    {
        name: 'BBQ Ovenbake Ribs',
        imagePath: 'path/to/coming soon.jpg',
        description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
    },
]
recipesDataNola = [
    {
        name: 'Oyster Dressing',
        imagePath: 'path/to/coming soon.jpg',
        description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
    }, {
        name: 'BBQ Shrimp',
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
recipesDataApps =[{
    name: 'Smothered Okra',
    imagePath: 'path/to/coming soon.jpg',
    description: 'Fresh cut okra with shrimp, tomatoes, and rice'
}] 

recipesDataVegan =[{
    name: 'Smothered Okra',
    imagePath: 'path/to/coming soon.jpg',
    description: 'Fresh cut okra with shrimp, tomatoes, and rice'
}] 
recipesDataDinner =[{
    name: 'Smothered Okra',
    imagePath: 'path/to/coming soon.jpg',
    description: 'Fresh cut okra with shrimp, tomatoes, and rice.'
}] //quick meals
   


  recipesDataDessert = [
    {
      name: 'Dessert 1',
      imagePath: 'path/to/dessert1.jpg',
      description: 'Description for Dessert 1.',
    },
    {
      name: 'Dessert 2',
      imagePath: 'path/to/dessert2.jpg',
      description: 'Description for Dessert 2.',
    },
    // Add more dessert recipes as needed
  ];
   
  // ... (your other recipe data)
  constructor() { }

  getRecipes(): any[] {
      return this.recipesData;
  }

  getRecipe(index: number): any {
      return this.recipesData[index];
  }
  getRecipesNola(): any[] {
      return this.recipesDataNola;
  }

  getRecipeNola(index: number): any {
      return this.recipesDataNola[index];
  }
  getRecipesVegan(): any[] {
      return this.recipesDataVegan;
  }

  getRecipeVegan(index: number): any {
      return this.recipesDataVegan[index];
  }
  getRecipesDessert(): any[] {
    return this.recipesDataDessert;
  }

  getRecipeDessert(index: number): any {
    return this.recipesDataDessert[index];
  }
}
