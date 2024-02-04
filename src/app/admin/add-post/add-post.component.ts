import { Component, Injectable } from '@angular/core';
import { AdminService } from '../../sevices/admin.service';
import { RecipeService } from 'src/app/sevices/recipes.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
@Injectable()
export class AddPostComponent {
  constructor(private adminService: AdminService,  private recipeService: RecipeService) { }


  recipeName: string = '';
  recipeDescription: string = '';
  imagePath: string = '';
  category: string = '';




  addRecipe() {
    const newRecipe = {
      name: this.recipeName,
      description: this.recipeDescription,
      imagePath: this.imagePath,
      category: this.category
      // Add more properties based on your recipe model
    };

    this.recipeService.addRecipe(newRecipe).subscribe(
      (response: Recipe) => {
        console.log('Recipe added successfully!', response);
        // Optionally, reset form fields or perform other actions
      },
      (error: any) => {
        console.error('Error adding recipe:', error);
      }
    );
  };
};
