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
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './Shopping-List/shopping-list.service';
import { RouteRoutingModule } from './route/route-routing.module';
import { RecipeMessageComponent } from './Recipe-Book/recipe-message/recipe-message.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeService } from './Recipe-Book/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent,
    DropdownDirective,
    RecipeMessageComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, FormsModule, RouteRoutingModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
