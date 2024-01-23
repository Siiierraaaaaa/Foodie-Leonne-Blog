import { Component } from '@angular/core';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent {
  stars = [1, 2, 3, 4, 5];
  recipes = [
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
    // Add more recipe objects with their details
  ];

  newComment = '';

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
