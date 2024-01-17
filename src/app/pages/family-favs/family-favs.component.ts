import { Component } from '@angular/core';
import { RecipeService } from '../../sevices/recipes.service';

@Component({
  selector: 'app-family-favs',
  templateUrl: './family-favs.component.html',
  styleUrls: ['./family-favs.component.css']
})
export class FamilyFavsComponent {
  recipes: any[];

  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getRecipes();
  }
}
