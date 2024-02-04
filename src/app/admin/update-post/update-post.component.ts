// Assuming your UpdatePostComponent looks something like this

import { Component } from '@angular/core';

import { Recipe } from 'src/app/models/recipe.model';
import { AdminService } from 'src/app/sevices/admin.service';
import { RecipeService } from 'src/app/sevices/recipes.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
})
export class UpdatePostComponent {
  recipeId: string = ''; // Add this property
  updatedRecipe: Recipe = { name: '', description: '', imagePath: '', category: '' }; // Assuming Recipe properties

  constructor(private adminService: AdminService, private recipeService: RecipeService) {}

  updateRecipe() {
    // Add validation or check if the recipeId is present before calling updateRecipe
    this.recipeService.updateRecipe(this.recipeId, this.updatedRecipe).subscribe(
      (response: Recipe) => {
        console.log('Recipe updated successfully!', response);
        // Optionally, perform other actions
      },
      (error: any) => {
        console.error('Error updating recipe:', error);
      }
    );
  }
}
