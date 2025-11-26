import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareholderOfferComponent } from './shareholder-offer.component';

const routes: Routes = [
  {
    path: '',
    component: ShareholderOfferComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareholderOfferRoutingModule { }
