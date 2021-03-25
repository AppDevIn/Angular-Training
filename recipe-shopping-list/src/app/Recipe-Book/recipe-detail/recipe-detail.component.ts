import { Component, Input, OnInit, Output } from '@angular/core';
import { ShoppingListService } from 'src/app/Shopping-List/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  open: boolean = false;
  @Input() recipe?: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  addShoppingList() {
    recipe: Recipe;
    this.recipeService.addIngredientsToShoppingList(this.recipe?.ingredients);
  }
}
