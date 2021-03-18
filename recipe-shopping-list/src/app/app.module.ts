import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './Shopping-List/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './Shopping-List/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './Recipe-Book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Recipe-Book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './Recipe-Book/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './Header/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }