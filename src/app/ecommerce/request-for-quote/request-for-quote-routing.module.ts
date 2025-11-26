import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestForQuoteComponent } from './request-for-quote.component';

const routes: Routes = [
  {
    path: '',
    component: RequestForQuoteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestForQuoteRoutingModule { }
