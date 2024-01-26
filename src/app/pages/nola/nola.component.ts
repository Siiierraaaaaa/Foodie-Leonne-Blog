import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeService } from 'src/app/sevices/recipes.service';

@Component({
  selector: 'app-nola',
  templateUrl: './nola.component.html',
  styleUrls: ['./nola.component.css']
})
export class NolaComponent {
  stars = [1, 2, 3, 4, 5];
  
  // recipes = [
  //   {
  //     name: 'Recipe 1',
  //     imageUrl: 'path/to/recipe1.jpg',
  //     description: 'Description of Recipe 1',
  //     rating: 4,
  //     comments: [
  //       { text: 'Great recipe!' },
  //       { text: 'I loved it!' },
  //     ],
  //   },
    // Add more recipe objects with their details
  // ];
  newComment: string = '';
  

  rateRecipe(recipe: any, rating: number) {
    recipe.rating = rating;
  }

  addComment(recipe: any) {
    if (this.newComment.trim() !== '') {
      recipe.comments.push({ text: this.newComment });
      this.newComment = '';
    }
  }
}
