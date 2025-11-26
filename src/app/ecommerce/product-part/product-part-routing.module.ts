import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPartComponent } from './product-part.component';


const routes: Routes = [
  {
    path: '',
    component: ProductPartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPartRoutingModule { }
