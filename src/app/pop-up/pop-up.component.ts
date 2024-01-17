import { Component } from '@angular/core';
import { RecipeService } from '../sevices/recipes.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  constructor(private recipeService: RecipeService) {}

  showRecipeInfo(recipeIndex: number): void {
    const recipeDetails = this.recipeService.getRecipe(recipeIndex);
    // Implement your logic to display recipeDetails
  }

  closePopup(): void {
    // Implement your logic to close the popup
  }
}
