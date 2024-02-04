import { Component } from '@angular/core';
import { AdminService } from 'src/app/sevices/admin.service';
import { RecipeService } from 'src/app/sevices/recipes.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent {
  recipeId: string = '';
  constructor(private adminService: AdminService, private recipeService: RecipeService) {}

  deleteRecipe(recipeId: string) {
    // Add validation or check if the recipeId is present before calling deleteRecipe
    this.recipeService.deleteRecipe(recipeId).subscribe(
      () => {
        console.log('Recipe deleted successfully!');
        // Optionally, perform other actions
      },
      (error: any) => {
        console.error('Error deleting recipe:', error);
      }
    );
  }
}
