import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FinancialResultsComponent } from './financial-results.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialResultsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialResultsRoutingModule { }
