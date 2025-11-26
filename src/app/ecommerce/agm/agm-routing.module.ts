import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AGMComponent } from './agm.component';

const routes: Routes = [
  {
    path: '',
    component: AGMComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AGMRoutingModule { }
