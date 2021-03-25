import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingListService) {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientAdded.subscribe(
      (ingredients) => (this.ingredients = ingredients)
    );
  }

  ngOnInit(): void {}
}
