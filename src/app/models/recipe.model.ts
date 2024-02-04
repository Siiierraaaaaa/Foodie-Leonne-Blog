// src/app/models/recipe.model.ts
export class Recipe {
    name: string;
    imagePath: string;
    description: string;
    category: string; // Assuming you have a 'category' field for the recipe
  
    constructor(name: string, imagePath: string, description: string, category: string) {
      this.name = name;
      this.imagePath = imagePath;
      this.description = description;
      this.category = category;
    }
  }

  