import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangedSub: Subscription;

  constructor(private shoppingService: ShoppingListService) {
    this.ingredients = this.shoppingService.getIngredients();
    this.igChangedSub = this.shoppingService.ingredientAdded.subscribe(
      (ingredients) => (this.ingredients = ingredients)
    );
  }
  ngOnDestroy(): void {
    this.igChangedSub.unsubscribe();
  }

  ngOnInit(): void {}
}
