import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { RecipeComponent } from './recipe.component';
const routes: Routes = [{
  path: '',
  component: RecipeComponent,
  children: [
    {
      path: 'add-recipe',
      component: AddRecipeComponent,
    },
    {
      path: 'add-recipe/:id',
      component: AddRecipeComponent,
    },
    {
      path: 'list-recipe',
      component: ListRecipeComponent,
    },
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
export const routedComponents = [
  RecipeComponent,
  AddRecipeComponent,
  ListRecipeComponent,
];