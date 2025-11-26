import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ExportProductComponent } from './export-product/export-product.component';

const routes: Routes = [{
  path: '',
  component: ProductComponent,
  children: [
    {
      path: 'add-product',
      component: AddProductComponent,
    },
    {
      path: 'list-product',
      component: ListProductComponent,
    },
    {
      path: 'export-product',
      component: ExportProductComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }

export const routedComponents = [
  ProductComponent,
  AddProductComponent,
  ListProductComponent,
  ExportProductComponent
];
