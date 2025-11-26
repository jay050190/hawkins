import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrowthExpansionComponent } from './growth-expansion.component';

const routes: Routes = [
  {
    path: '',
    component: GrowthExpansionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrowthExpansionRoutingModule { }
