import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteCartComponent } from './quote-cart.component';

const routes: Routes = [
  {
    path: '',
    component: QuoteCartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteCartRoutingModule { }
