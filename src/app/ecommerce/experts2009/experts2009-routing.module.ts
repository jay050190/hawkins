import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Experts2009Component } from './experts2009.component';

const routes: Routes = [
  {
    path: '',
    component: Experts2009Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Experts2009RoutingModule { }
