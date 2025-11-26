import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddressComponent } from './customer-address.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerAddressComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerAddressRoutingModule { }
