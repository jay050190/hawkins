import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorisedDealersComponent } from './authorised-dealers.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorisedDealersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorisedDealersRoutingModule { }
