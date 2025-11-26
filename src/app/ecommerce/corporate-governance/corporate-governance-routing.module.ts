import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CorporateGovernanceComponent } from './corporate-governance.component';

const routes: Routes = [
  {
    path: '',
    component: CorporateGovernanceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateGovernanceRoutingModule { }
