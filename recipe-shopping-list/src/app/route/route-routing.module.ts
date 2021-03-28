import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from '../Recipe-Book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '../Recipe-Book/recipe-list/recipe-item/recipe-item.component';
import { RecipeMessageComponent } from '../Recipe-Book/recipe-message/recipe-message.component';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from '../Shopping-List/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  { path: 'shopping', component: ShoppingListComponent },
  {
    path: 'recipe',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeMessageComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent, pathMatch: 'full' },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
