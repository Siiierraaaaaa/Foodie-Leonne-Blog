import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  getRecipe(index: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${index}`);
  }

  getRecipesNola(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/nola`);
  }

  getRecipeNola(index: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/nola/${index}`);
  }

  getRecipesVegan(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/vegan`);
  }

  getRecipeVegan(index: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/vegan/${index}`);
  }

  getRecipesDessert(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/dessert`);
  }

  getRecipeDessert(index: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/dessert/${index}`);
  }

  addRecipe(newRecipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, newRecipe);
  }
  deleteRecipe(recipeId: string): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${recipeId}`;
    return this.http.delete<void>(deleteUrl);
  }

  updateRecipe(recipeId: string, updatedRecipe: Recipe): Observable<Recipe> {
    const updateUrl = `${this.apiUrl}/${recipeId}`;
    return this.http.put<Recipe>(updateUrl, updatedRecipe);
  }
}
