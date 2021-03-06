import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../Shopping-List/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'A Test Recipe',
      'This is simply just a desciption',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fweneedfun.com%2Fwp-content%2Fuploads%2F2015%2F10%2FBeautiful-Food-Photos-9.jpg&f=1&nofb=1',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      2,
      'A Test Recipe',
      'This is simply just a desciption',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fweneedfun.com%2Fwp-content%2Fuploads%2F2015%2F10%2FBeautiful-Food-Photos-9.jpg&f=1&nofb=1',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe | undefined {
    return this.recipes.find((r) => r.id === id);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[] = []) {
    this.slService.addIngredients(ingredients);
  }
}
