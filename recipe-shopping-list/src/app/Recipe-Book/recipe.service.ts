import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply just a desciption',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fweneedfun.com%2Fwp-content%2Fuploads%2F2015%2F10%2FBeautiful-Food-Photos-9.jpg&f=1&nofb=1'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply just a desciption',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fweneedfun.com%2Fwp-content%2Fuploads%2F2015%2F10%2FBeautiful-Food-Photos-9.jpg&f=1&nofb=1'
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
