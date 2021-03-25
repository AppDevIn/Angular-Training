import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef?: ElementRef;
  @ViewChild('amountInput') amountInputRef?: ElementRef;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    const name = this.nameInputRef?.nativeElement.value;
    const amount = this.amountInputRef?.nativeElement.value;
    const newIngreident = new Ingredient(name, amount);
    this.shoppingService.addIngredient(newIngreident);
  }
}
