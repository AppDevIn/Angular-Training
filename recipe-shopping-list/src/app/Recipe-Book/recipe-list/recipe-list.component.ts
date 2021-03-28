import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router) {
    this.recipes = recipeService.getRecipes();
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onClick() {
    this.router.navigate(['/recipe', 'new']);
  }
}
