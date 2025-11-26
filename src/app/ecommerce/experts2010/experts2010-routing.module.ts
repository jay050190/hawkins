import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Experts2010Component } from './experts2010.component';

const routes: Routes = [
  {
    path: '',
    component: Experts2010Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Experts2010RoutingModule { }
