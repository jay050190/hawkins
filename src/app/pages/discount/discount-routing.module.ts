import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDiscountComponent } from './list-discount/list-discount.component';
import { DiscountpageComponent } from './discountpage/discountpage.component';
import { discountComponent } from './discount.component';

const routes: Routes = [{
  path: '',
  component: discountComponent,
  children: [
    {
      path: 'discountpage/:id',
      component: DiscountpageComponent,
    },
    {
      path: 'discountpage',
      component: DiscountpageComponent,
    },
    {
      path: 'list-discount',
      component: ListDiscountComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DiscountRoutingModule { }
export const routedComponents = [
  DiscountpageComponent,
  ListDiscountComponent,
  discountComponent
];