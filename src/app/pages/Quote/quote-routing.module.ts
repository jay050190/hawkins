import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { quoteComponent } from './quote.component';
import { ListQuoteComponent } from './list-quote/list-quote.component';

const routes: Routes = [{
  path: '',
  component: quoteComponent,
  children: [
    {
      path: 'list-quote',
      component: ListQuoteComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
export const routedComponents = [
  quoteComponent,
  ListQuoteComponent,
];