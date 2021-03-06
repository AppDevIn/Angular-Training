import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientAdded = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomotoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[] = []) {
    ingredients.forEach((i) => {
      this.ingredients.push(i);
    });
    console.log(
      '🚀 ~ file: shopping-list.service.ts ~ line 24 ~ ShoppingListService ~ ingredients.forEach ~ this.ingredients',
      this.ingredients
    );

    this.ingredientAdded.next(this.ingredients.slice());
  }
}
